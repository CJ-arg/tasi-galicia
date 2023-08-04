import { useStore } from "@/store";
import {
  Box,
  Button,
  Container,
  Grid,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useTimeOut from "@/hooks/useTimeOut";

const Operation = () => {
  const { user } = useStore();
  const router = useRouter();
  const href = {
    extraction: "/extraction",
    cancel: "/cancelation",
    deposit: "/deposit",
    balance: "/balance",
    home: "/auth",
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    Object.keys(user).length >= 1 ? user : router.push("/auth");
  }, []);

  useTimeOut({
    time: 30000,
    dispatch: () => {
      router.push(href.home);
    },
  });
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const openModal = () => {
    console.log("abrir modal");
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
                handleOpen();
              }}
            >
              Cancelar
            </Button>
          </Stack>
        </Box>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              CONFIRMAR CANCELACION.
            </Typography>
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
                router.push(href.home);
              }}
            >
              Confirmar
            </Button>
          </Box>
        </Modal>
      </Container>
    </>
  );
};
export default Operation;
