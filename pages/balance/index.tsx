import { Box, Button, Container, Grid, Stack } from "@mui/material";
import React, { useEffect } from "react";

const Balance = () => {
  const user = "Carlos";

  useEffect(() => {
    setTimeout(() => {
      console.log("redirect");
    }, 5000);
  }, []);

  const saldo = "1.500.000";

  return (
    <>
      <Container>
        <Box
          sx={{
            p: 6,
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
              height: { sm: 100 },
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <h1>Su saldo es</h1>
          </Grid>
          <Grid
            item
            display={"flex"}
            justifyContent={"center"}
            sx={{
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <h1>${saldo}</h1>
          </Grid>
          <Grid
            item
            display={"flex"}
            justifyContent={"center"}
            sx={{
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <h3>¿Desea realizar otra operación?</h3>
          </Grid>
          <Stack direction="row" spacing={15} justifyContent={"center"} mt={3}>
            <Button
              variant="contained"
              sx={{
                padding: 1,
                width: 50,
                borderRadius: 0,
              }}
            >
              SI
            </Button>
            <Button
              variant="contained"
              sx={{
                padding: 1,
                width: 50,
                borderRadius: 0,
              }}
            >
              NO
            </Button>
          </Stack>
        </Box>
      </Container>
    </>
  );
};
export default Balance;
