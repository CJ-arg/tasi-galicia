import useTimeOut from "@/hooks/useTimeOut";
import {
  Box,
  Button,
  Container,
  Grid,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useStore } from "@/store";

const Cancelation = () => {
  const router = useRouter();
  const { user } = useStore();
  const href = "/";
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      router.push(href);
    }, 5000);
  };

  useEffect(() => {
    Object.keys(user).length >= 1 ? user : router.push("/auth");
  }, []);

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    height: 250,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    alignItems: "center",
  };

  return (
    <>
      <Container>
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              textAlign="center"
            >
              CANCELAR LA OPERACION
            </Typography>
            <Stack direction="row" spacing={8} justifyContent={"center"}>
              <Button
                variant="contained"
                sx={{
                  mt: 7,
                  padding: 2,
                  width: 250,
                  borderRadius: 0,
                  backgroundColor: "grey",
                }}
                onClick={handleClose}
              >
                Confirmar
              </Button>
            </Stack>
          </Box>
        </Modal>
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
export default Cancelation;
