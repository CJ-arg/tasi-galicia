import React, { useEffect, useState } from "react";
import useTimeOut from "@/hooks/useTimeOut";
import { Box, Button, Container, Grid, Modal, Stack } from "@mui/material";
import { useRouter } from "next/router";
import { useStore } from "@/store";

const NoBalance = () => {
  const { user } = useStore();
  const router = useRouter();
  const href = {
    extraction: "/extraction",
    cancel: "/cancelation",
    anotherAmount: "/anotheramount",
    balance: "/balance",
    home: "/auth",
  };

  // useEffect(() => {
  //   Object.keys(user).length >= 1 ? user : router.push("/");
  // }, []);
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    p: 6,
    width: { sm: 550 },
    height: { sm: 250 },
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <>
      <Grid container alignItems="center" justifyContent="center">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
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
                  router.push(href.cancel);
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
                  router.push(href.balance);
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
                  router.push(href.balance);
                }}
              >
                <small>Otro monto</small>
              </Button>
            </Stack>
          </Box>
        </Modal>
      </Grid>
    </>
  );
};

export default NoBalance;
