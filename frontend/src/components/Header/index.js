import { Container, Item } from './styles'
import React from 'react'

export default () => {
    const date = new Date()
    const hour = date.getHours()
    const message = hour >= 0 && hour < 12 ? 'Good Morning' : hour >= 12 && hour < 18 ? 'Good Afternoon' : 'Good Night' 
    return(
        <Container>
            <Item>
                CadUsers
            </Item>
            <Item>
                {message}
            </Item>
        </Container>
    )
} 