import { useStore } from "@/store";
import { Box, Button, Container, Grid, Stack, TextField } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const Operation = () => {
  const { user } = useStore();
  const router = useRouter();
  const href = {
    extraction: "/extraction",
    cancel: "/cancelation",
    deposit: "/deposit",
    balance: "/balance",
  };

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
          <Grid item xs={12} textAlign={"center"} mb={5}>
            <h1>Bienvenido {user.name}</h1>
            <h3>¿Qué operación deseas realizar?</h3>
          </Grid>

          <Stack direction="row" spacing={8} justifyContent={"center"}>
            <Button
              onClick={() => {
                router.push(href.extraction);
              }}
              variant="contained"
              sx={{
                padding: 1,
                width: 250,
                borderRadius: 0,
                backgroundColor: "grey",
              }}
            >
              Extraccion
            </Button>
            <Button
              onClick={() => {
                router.push(href.deposit);
              }}
              variant="contained"
              sx={{
                padding: 1,
                width: 250,
                borderRadius: 0,
                backgroundColor: "grey",
              }}
            >
              Deposito
            </Button>
          </Stack>
          <Stack direction="row" spacing={8} justifyContent={"center"}>
            <Button
              onClick={() => {
                router.push(href.balance);
              }}
              variant="contained"
              sx={{
                mt: 3,
                padding: 1,
                width: 250,
                borderRadius: 0,
                backgroundColor: "grey",
              }}
            >
              Consulta de saldo
            </Button>
          </Stack>
          <Stack
            direction="row"
            sx={{
              alignItems: "flex-end",
              p: 1,
              m: 2,
              height: 100,
            }}
          >
            <Button
              variant="contained"
              sx={{
                mt: 3,
                padding: 1,
                width: 150,
                height: 40,
                borderRadius: 0,
              }}
              onClick={() => {
                router.push(href.cancel);
              }}
            >
              Cancelar
            </Button>
          </Stack>
        </Box>
      </Container>
    </>
  );
};
export default Operation;
