import React, { useEffect, useState } from "react";
import { Keybord } from "@/component/Keybord";

import useTimeOut from "@/hooks/useTimeOut";
import { Box, Button, Container, Grid, Stack } from "@mui/material";

const AnotherAmount = () => {
  const [amount, setAmount] = useState("0");
  const [continuar, setContinuar] = useState<any>(false);
  // useTimeOut({
  //   time: 20000,
  //   dispatch: () => {
  //     setField({ ...fieldInitialValue });
  //   },
  //   state: [field],
  // });
  useEffect(() => {
    amount.length > 1 && amount.charAt(0) === "0"
      ? setAmount(amount.substring(1))
      : null;
    if (Number(amount) >= 1) setContinuar(true);
  }, [amount]);

  const handleChange = (value) => {
    setAmount(amount + value);
  };

  const handleBorrar = () => {
    setAmount("0");
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
                    router.push(hrefOperation);
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
