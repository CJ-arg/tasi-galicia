import { Box, Grid } from "@mui/material";
import React from "react";
import FormRow from "./ButtonKeyboard";
import ButtonKeyboard from "./ButtonKeyboard";

export const Keybord = ({
  handleChange,
  continuar,
  handleContinue,
  handleBorrar,
}) => {
  return (
    <Box
      sx={{
        p: 1,
        width: { sm: 420 },
        height: { sm: 244 },
        border: "1px solid",
        padding: 3,
      }}
    >
      <Grid
        container
        spacing={1}
        sx={{
          width: { sm: 400 },
          backgroundColor: "white",
          padding: 1,
          borderRadius: 0,
        }}
      >
        <ButtonKeyboard
          handleChange={handleChange}
          continuar={continuar}
          handleContinue={handleContinue}
          handleBorrar={handleBorrar}
        />
      </Grid>
    </Box>
  );
};
