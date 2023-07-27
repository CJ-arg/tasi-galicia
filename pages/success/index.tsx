import { Box, Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import useTimeOut from "@/hooks/useTimeOut";

const Success = () => {
  const router = useRouter();
  const href = "/auth";

  useTimeOut({
    time: 5000,
    dispatch: () => {
      router.push(href);
    },
  });

  const operacion = "Extracción";
  const monto = "5000";
  const cuenta = "xxxx-xxxxx-xxx";
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
              height: { sm: 350 },
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <h1>
              Su {operacion} de monto de ${monto}, <br />
              en la cuenta N*{cuenta},<br />
              fue realizado con éxito.
            </h1>
          </Grid>
        </Box>
      </Container>
    </>
  );
};
export default Success;
