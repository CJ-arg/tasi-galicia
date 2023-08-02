import useTimeOut from "@/hooks/useTimeOut";
import { Box, Button, Container, Grid, Stack, TextField } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useStore } from "@/store";

const Cancelation = () => {
  const router = useRouter();
  const { user } = useStore();
  const href = "/";

  useTimeOut({
    time: 5000,
    dispatch: () => {
      router.push(href);
    },
  });
  useEffect(() => {
    Object.keys(user).length >= 1 ? user : router.push("/");
  }, []);

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
export default Cancelation;
