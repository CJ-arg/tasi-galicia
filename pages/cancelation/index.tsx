import { Box, Button, Container, Grid, Stack, TextField } from "@mui/material";
import React from "react";

const Operation = () => {
  const user = "Carlos";
  return (
    <>
      <Container>
        <Box
          sx={{
            p: 4,
            width: { sm: 950 },
            height: { sm: 450 },
            border: "1px solid",
            mt: 6,
            ml: 10,
          }}
        >
          <Grid
            item
            display={"flex"}
            justifyContent={"center"}
            sx={{
              height: { sm: 350 },
              alignItems: "center",
            }}
          >
            <h1>La operación ha sido cancelada.</h1>
          </Grid>
        </Box>
      </Container>
    </>
  );
};
export default Operation;
