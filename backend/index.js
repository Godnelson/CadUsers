//Sequelize

const {Sequelize, DataTypes} = require('sequelize')

const sequelize = new Sequelize({
    dialect:'sqlite',
    storage:'./db.sqlite'
})

//Express

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())

try{
    sequelize.authenticate();
    console.log('Conectado ao banco')

    const User = sequelize.define('User', {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        age:{
            type:DataTypes.INTEGER,
            allowNull:false
        }
    })
    User.sync({alter:true})



    app.get('/', async (req, res)=>{
        const data = await User.findAll()
        return res.json(data)
    })

    app.get('/:id',async (req, res) => {
        try{
            const paramID = req.params.id
        const user = await User.findByPk(paramID)
        
        if(user){
            return res.status(200).json(user)
        }

        return res.status(404).json('User not Found')
        }catch{
            res.status(500).json('something went wrong')
        }
    })

    app.post('/', (req, res) => {
         const reqBody = req.body
        try{
            const user = User.create({
                name : reqBody.name,
                age: reqBody.age
            })

            return res.status(201).json(user)
        }catch{
            return res.status(500).json('something went wrong')
        }
    })

    app.patch('/:id', async (req, res) => {
        try{
            const paramID = req.params.id
            const reqBody = req.body

        const user = await User.findByPk(paramID)
        user.set(reqBody)
        await user.save()
        return res.status(200).json(user)
        }catch{
            return res.status(500).json('something went wrong')
        }
    })

    app.delete('/:id', async (req, res) => {
        try{
            const paramID = req.params.id
            const user = await User.findByPk(paramID)
            user.destroy()
            return res.sendStatus(204)
        }catch{
            return res.sendStatus(500)
        }
    })
    
    app.listen(8000, ()=>{
        console.log('Foi')
    })
}
catch(err){
    console.log(err)
}