import React from "react";
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
                    <img src={"wrench.svg"} width={'100%'}/>
                </ListOptionsIcons>
                <ListOptionsIcons>
                    <img src={"trash.svg"} width={'100%'}/>
                </ListOptionsIcons>
            </ListOptions>
          </ListItemLeftContainer>
        </ListItem>
      </ListBox>
    </ListContainer>
  );
};
