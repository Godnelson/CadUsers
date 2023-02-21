import { Modal } from "@mui/material";
import React from "react";
import { ModalBackground } from "./styles";

export default ({visible})=>{
    return(
        <ModalBackground visible={visible} onClick={()=>{alert('HI')}}>
        
        </ModalBackground>
    )
}