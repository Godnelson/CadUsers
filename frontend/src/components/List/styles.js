import styled from "@emotion/styled";
import { Button } from "@mui/material";

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