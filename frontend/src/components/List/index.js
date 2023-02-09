import React from "react";
import {
  AddButton,
  ButtonContainer,
  ListAge,
  ListBox,
  ListContainer,
  ListItem,
  ListItemLeftContainer,
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
          <ListItemLeftContainer>
            <ListAge>Age</ListAge>
            <ListOptions>
                <ListOptionsIcons>
                    <img src={"logo192.png"} width={'100%'}/>
                </ListOptionsIcons>
                <ListOptionsIcons>
                    <img src={"logo192.png"} width={'100%'}/>
                </ListOptionsIcons>
            </ListOptions>
          </ListItemLeftContainer>
        </ListItem>
      </ListBox>
    </ListContainer>
  );
};
