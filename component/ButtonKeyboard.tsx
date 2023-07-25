import { Button, Grid, ListItem } from "@mui/material";
import { log } from "console";
import { useState } from "react";

const ButtonKeyboard = ({ handleChange, continuar }) => {
  const handleButton = () => {
    let buttons = [];
    for (let i = 1; i < 13; i++) {
      let value =
        i === 10
          ? "Borrar"
          : i === 11
          ? "0"
          : i === 12
          ? "Continuar"
          : i.toString();
      buttons.push(
        value !== "Continuar" ? (
          <Grid key={value} item xs={4}>
            <Button
              onClick={() => handleChange(value)}
              disabled={false}
              variant="contained"
              sx={{
                width: { sm: 88 },
                borderRadius: 0,
              }}
            >
              {value}
            </Button>
          </Grid>
        ) : (
          <Grid key={value} item xs={4}>
            <Button
              onClick={() => handleChange(value)}
              disabled={!continuar ? true : false}
              variant="contained"
              sx={{
                width: { sm: 88 },
                borderRadius: 0,
              }}
            >
              {value}
            </Button>
          </Grid>
        )
      );
    }
    return buttons;
  };

  return <>{handleButton()}</>;
};

export default ButtonKeyboard;
