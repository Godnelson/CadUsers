import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const ListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
`

export const AddButton = styled(Button)({
    color:"white",
    backgroundColor:'#3377C8',
    border:'1px solid #3377C8',
    fontSize: 26,
    marginTop:'8vh',
    marginRight:'8vw',
    '&:hover':{
        color:"#3377C8",
        border:'1px solid #3377C8',
        backgroundColor:'#FFF',
    }
})

export const ListBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 8vh;
    box-sizing: border-box;
    padding-left: 8vw;
    padding-right: 8vw;
`

export const ListItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

export const ListName = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 25px;
    width: 10%;
`

export const ListItemLeftContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 25px;
    width: 25%;
`

export const ListAge = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    box-sizing: border-box;
    padding-right: 3vw;
    border-right: 1px solid black;
    margin-right: 0.5vw;
    font-size: 25px;
    width: 49%;
`

export const ListOptions = styled.div`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding-left: 3vw;
    justify-content: space-between;
    width: 50%;
`

export const ListOptionsIcons = styled.div`
    display: flex;
    align-items: center;
    width: 45%;
`

export const ListItemPointedLine = styled.div`
    width: 50vw;
    height: 1px;
    border-bottom: 2px dashed black;
`