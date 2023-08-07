import { Box, Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import useTimeOut from "@/hooks/useTimeOut";
import { useStore } from "@/store";

const Success = () => {
  const router = useRouter();
  const href = "/";
  const { user, amountOperation } = useStore();
  const operacion = router.query.name;

  useTimeOut({
    time: 10000,
    dispatch: () => {
      router.push(href);
    },
  });
  useEffect(() => {
    Object.keys(user).length >= 1 ? user : router.push(href);
  }, []);

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
              Su {operacion} de monto de ${amountOperation}, <br />
              en la cuenta N*{user.account},<br />
              fue realizado con éxito.
            </h1>
          </Grid>
        </Box>
      </Container>
    </>
  );
};
export default Success;
