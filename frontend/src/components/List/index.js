import React, { useState } from "react";
import {
  AddButton,
  ButtonContainer,
  ListAge,
  ListBox,
  ListContainer,
  ListItem,
  ListItemLeftContainer,
  ListItemPointedLine,
  ListName,
  ListOptions,
  ListOptionsIcons,
} from "./styles";

export default () => {
  return (
    <ListContainer>
      <ButtonContainer>
        <AddButton>+</AddButton>
      </ButtonContainer>
      <ListBox>
        <ListItem>
          <ListName>Name</ListName>
          <ListItemPointedLine/>
          <ListItemLeftContainer>
            <ListAge>Age</ListAge>
            <ListOptions>
                <ListOptionsIcons>
                    <img src={"wrench.svg"} width={'25vw'}/>
                </ListOptionsIcons>
                <ListOptionsIcons style={{marginLeft: '2vh'}}>
                    <img src={"trash.svg"} width={'25vw'}/>
                </ListOptionsIcons>
            </ListOptions>
          </ListItemLeftContainer>
        </ListItem>
      </ListBox>
    </ListContainer>
  );
};
