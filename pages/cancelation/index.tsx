import useTimeOut from "@/hooks/useTimeOut";
import { Box, Button, Container, Grid, Stack, TextField } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Cancelation = () => {
  const router = useRouter();
  const user = "Carlos";
  const href = "/auth";

  useTimeOut({
    time: 5000,
    dispatch: () => {
      router.push(href);
    },
  });

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
