import React, { useEffect, useState } from "react";
import { useStore } from "@/store";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";
import { putExtraction } from "@/services/user";

const Extraction = () => {
  const { user, setAmountOperation } = useStore();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState(0);
  const { balance } = user;
  console.log(user);

  const handleContinue = () => {
    if (amount == 1) {
      router.push("/anotheramount");
    } else if (balance < amount) {
      router.push("/nobalance");
    } else {
      setAmountOperation(amount);
      const newAmount = user.balance - amount;
      let data = { ...user, balance: newAmount };
      putExtraction(data);
      router.push(
        {
          pathname: "/success",
          query: { name: "Extracción" },
        },
        "/success"
      );
    }
  };
  const radio = (e) => {
    e.preventDefault();
    console.log(amount, balance);

    setAmount(parseInt(e.target.defaultValue));
  };
  // useEffect(() => {
  //   Object.keys(user).length > 0 ? setIsLoading(false) : router.push("/");
  // }, [amount]);

  return (
    <>
      {!isLoading && (
        <Container>
          <Box
            sx={{
              p: 4,
              width: { sm: 950 },
              height: { sm: 550 },
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
              <h1>Extracción </h1>
            </Grid>
            <Grid
              direction="row"
              justifyContent={"space-between"}
              container
              sx={{
                backgroundColor: "white",
                padding: 4,
                width: { sm: 850 },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  p: 1,
                  m: 1,
                  bgcolor: "background.paper",
                  borderRadius: 1,
                }}
              >
                <Box
                  sx={{
                    width: { sm: 350 },
                    height: { sm: 180 },
                    border: "1px solid",
                    padding: 2,
                  }}
                >
                  <FormControl>
                    <RadioGroup
                      onChange={(e) => {
                        radio(e);
                      }}
                      aria-labelledby="demo-radio-buttons-group-label"
                      name="radio-buttons-group"
                      sx={{
                        padding: 1,
                      }}
                    >
                      <FormControlLabel
                        value="500"
                        control={<Radio />}
                        label="$500"
                      />
                      <FormControlLabel
                        value="2000"
                        control={<Radio />}
                        label="$2.000"
                      />
                      <FormControlLabel
                        value="3000"
                        control={<Radio />}
                        label="$3.000"
                      />
                      <Box
                        sx={{
                          position: "absolute" as "absolute",
                          width: { sm: 350 },
                          height: { sm: 180 },
                          border: "1px solid",
                          marginLeft: { sm: 55 },
                          marginTop: { sm: -3.4 },
                          padding: 3,
                        }}
                      >
                        <Grid item xs={6}>
                          <FormControlLabel
                            value="5000"
                            control={<Radio />}
                            label="$5.000"
                          />
                          <FormControlLabel
                            value="6000"
                            control={<Radio />}
                            label="$6.000"
                          />
                          <FormControlLabel
                            value="1"
                            control={<Radio />}
                            label="Otro monto"
                          />
                        </Grid>
                      </Box>
                    </RadioGroup>
                  </FormControl>
                </Box>
              </Box>
            </Grid>
            <Stack direction="row" spacing={50} justifyContent={"center"}>
              <Button
                onClick={() => router.push("/cancelation")}
                variant="contained"
                sx={{
                  padding: 1,
                  width: 150,
                  borderRadius: 0,
                }}
              >
                Cancelar
              </Button>
              <Button
                onClick={() => handleContinue()}
                variant="contained"
                disabled={!amount ? true : false}
                sx={{
                  padding: 1,
                  width: 150,
                  borderRadius: 0,
                }}
              >
                Continuar
              </Button>
            </Stack>
          </Box>
        </Container>
      )}
    </>
  );
};

export default Extraction;
