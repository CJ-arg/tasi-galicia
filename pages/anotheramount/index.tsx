import React, { useEffect, useState } from "react";
import { Keybord } from "@/component/Keybord";
import useTimeOut from "@/hooks/useTimeOut";
import { Box, Button, Container, Grid, Stack } from "@mui/material";
import { useRouter } from "next/router";
import { useStore } from "@/store";

const AnotherAmount = () => {
  const [amount, setAmount] = useState("0");
  const [continuar, setContinuar] = useState<any>(false);
  const router = useRouter();
  const href = "/cancelation";
  const { user } = useStore();

  useEffect(() => {
    Object.keys(user).length >= 1 ? user : router.push("/");
  }, []);

  const handleChange = (value) => {
    setAmount(parseInt(amount + value).toString());
    setContinuar(true);
  };

  const handleBorrar = () => {
    setAmount("0");
    setContinuar(false);
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
          <Grid
            item
            display={"flex"}
            justifyContent={"center"}
            sx={{
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <h2>Otro Monto</h2>
          </Grid>

          <Grid
            container
            sx={{
              backgroundColor: "white",
              padding: 4,
              width: { sm: 850 },
            }}
          >
            <Grid item xs={6}>
              <Grid container spacing={1}>
                <Grid
                  item
                  xs={12}
                  display={"flex"}
                  justifyContent={"center"}
                  sx={{
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  {<h1>${amount}</h1>}
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  height: 135,
                }}
                display="flex"
                justifyContent={"left"}
                alignItems={"flex-end"}
              >
                <Button
                  variant="contained"
                  sx={{
                    width: 180,
                    height: 35,
                    borderRadius: 0,
                  }}
                  onClick={() => {
                    router.push(href);
                  }}
                >
                  Cancelar
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Keybord
                handleChange={handleChange}
                continuar={continuar}
                // handleContinue={handleContinue}
                handleBorrar={handleBorrar}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default AnotherAmount;
