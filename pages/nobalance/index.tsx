import React, { useEffect } from "react";
import useTimeOut from "@/hooks/useTimeOut";
import { Box, Button, Container, Grid, Stack } from "@mui/material";
import { useRouter } from "next/router";
import { useStore } from "@/store";

const NoBalance = () => {
  const { user } = useStore();
  const router = useRouter();
  useEffect(() => {
    Object.keys(user).length >= 1 ? user : router.push("/");
  }, []);

  return (
    <>
      <Grid container alignItems="center" justifyContent="center">
        <Box
          sx={{
            p: 6,
            width: { sm: 550 },
            height: { sm: 250 },
            border: "1px solid",
            mt: 20,
            ml: 0,
          }}
        >
          <Grid
            item
            display={"flex"}
            justifyContent={"center"}
            sx={{
              height: { sm: 80 },
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <h4>
              Su saldo es insuficiente. Puede consultar su saldo, probar con
              otro monto o cancelar la operacion
            </h4>
          </Grid>
          <Grid
            item
            display={"flex"}
            justifyContent={"center"}
            sx={{
              alignItems: "center",
              textAlign: "center",
            }}
          ></Grid>

          <Stack direction="row" spacing={2} justifyContent={"center"} mt={4}>
            <Button
              variant="contained"
              sx={{
                width: 180,
                height: 35,
                borderRadius: 0,
              }}
              onClick={() => {
                router.push(hrefOperation);
              }}
            >
              Cancelar
            </Button>
            <Button
              variant="contained"
              sx={{
                width: 180,
                height: 35,
                borderRadius: 0,
              }}
              onClick={() => {
                router.push(hrefOperation);
              }}
            >
              <small>Consultar saldo</small>
            </Button>
            <Button
              variant="contained"
              sx={{
                width: 180,
                height: 35,
                borderRadius: 0,
              }}
              onClick={() => {
                router.push(hrefCancel);
              }}
            >
              <small>Otro monto</small>
            </Button>
          </Stack>
        </Box>
      </Grid>
    </>
  );
};

export default NoBalance;
