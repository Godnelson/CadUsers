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
  const data = [{ name: "Luiz", age: 20 }, { name: "Gui Mala", age: 19 }, { name: "Julia", age: 22 }];
  return (
    <ListContainer>
      <ButtonContainer>
        <AddButton>+</AddButton>
      </ButtonContainer>
      <ListBox>
        {data.map((e) => {
          return (
            <ListItem>
              <ListName>{e.name}</ListName>
              <ListItemPointedLine />
              <ListItemLeftContainer>
                <ListAge>{e.age}</ListAge>
                <ListOptions>
                  <ListOptionsIcons>
                    <img src={"wrench.svg"} width={"25vw"} />
                  </ListOptionsIcons>
                  <ListOptionsIcons style={{ marginLeft: "2vh" }}>
                    <img src={"trash.svg"} width={"25vw"} />
                  </ListOptionsIcons>
                </ListOptions>
              </ListItemLeftContainer>
            </ListItem>
          );
        })}
      </ListBox>
    </ListContainer>
  );
};
