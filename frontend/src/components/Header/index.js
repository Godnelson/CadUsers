import { Container, Item } from './styles'
import React, { useEffect, useState } from 'react'
import { fontSize } from '@mui/system'

export default () => {
    function AttFontSize(){
        const windowSize = window.innerWidth
        useFont(windowSize < 420 ? 25 : 32)
        console.log('entrando')
    }
    const [fontSizeSite, useFont] = useState(32)
    const date = new Date()
    const hour = date.getHours()
    const message = hour >= 0 && hour < 12 ? 'Good Morning' : hour >= 12 && hour < 18 ? 'Good Afternoon' : 'Good Night' 
    window.addEventListener('resize', AttFontSize)
    return(
        <Container>
            <Item style={{fontSize: fontSizeSite}}>
                CadUsers
            </Item>
            <Item style={{fontSize: fontSizeSite}}>
                {message}
            </Item>
        </Container>
    )
} 