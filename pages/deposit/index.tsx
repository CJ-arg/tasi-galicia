import React, { useEffect, useState } from "react";
import { Keybord } from "@/component/Keybord";
import useTimeOut from "@/hooks/useTimeOut";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { log } from "console";

const Deposit = () => {
  const fieldInitialValue = {
    cien: 0,
    docientos: 0,
    quinientos: 0,
    mil: 0,
  };
  const valorNumerico = {
    cien: 100,
    docientos: 200,
    quinientos: 500,
    mil: 1000,
  };
  const [inputFocus, setInputFocus] = useState<any>("");
  const [field, setField] = useState<any>(fieldInitialValue);
  const [nuemrico, setNumerico] = useState<any>(valorNumerico);
  const [amount, setAmount] = useState(0);
  const [continuar, setContinuar] = useState<any>(false);
  const router = useRouter();
  const href = "/cancelation";

  const handleChange = (value) => {
    console.log("vn", valorNumerico[inputFocus]);

    console.log("va", typeof value, value);
    amount == 0
      ? setField({ ...field, [inputFocus]: (field[inputFocus] = value) })
      : setField({ ...field, [inputFocus]: field[inputFocus] + value });

    setContinuar(true);
  };
  useEffect(() => {
    field[inputFocus] &&
      setAmount(parseInt(field[inputFocus]) * valorNumerico[inputFocus]);
    console.log("paso", field[inputFocus]);
  }, [field]);

  console.log("field libre", field[inputFocus], typeof field);
  console.log("amount inicio", amount, typeof amount);

  const handleBorrar = () => {
    setAmount(0);
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
            <Typography variant="h5" gutterBottom>
              Depósito
            </Typography>
          </Grid>

          <Grid
            container
            sx={{
              backgroundColor: "white",
              padding: 4,
              width: { sm: 850 },
            }}
          >
            <Grid item xs={2.5}>
              <Grid container>
                <Box>
                  <Stack>
                    <Typography
                      sx={{
                        height: 60,
                      }}
                    >
                      {" "}
                      <small>PESOS</small>
                    </Typography>
                    <Typography
                      sx={{
                        height: 40,
                      }}
                    >
                      $100
                    </Typography>
                    <Typography
                      sx={{
                        height: 40,
                      }}
                    >
                      $200
                    </Typography>
                    <Typography
                      sx={{
                        height: 40,
                      }}
                    >
                      {" "}
                      $500
                    </Typography>
                    <Typography
                      sx={{
                        height: 40,
                      }}
                    >
                      {" "}
                      $1000
                    </Typography>
                  </Stack>
                </Box>
              </Grid>
              <Grid
                item
                xs={6}
                sx={{
                  height: 50,
                }}
                display="flex"
                justifyContent={"left"}
                alignItems={"flex-end"}
              >
                <Button
                  variant="contained"
                  sx={{
                    width: 280,
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
            <Grid item xs={2.5}>
              <Grid container>
                <Box>
                  <Stack>
                    <Typography
                      sx={{
                        height: 50,
                      }}
                    >
                      {" "}
                      <small>CANTIDAD</small>
                    </Typography>
                    <TextField
                      focused
                      onFocus={({ target }) => {
                        setInputFocus(target.name);
                      }}
                      size="small"
                      value={field.cien}
                      placeholder="0"
                      name="cien"
                      variant="outlined"
                      inputProps={{
                        sx: {
                          textAlign: "left",
                          "&::placeholder": {
                            textAlign: "center",
                            color: "black",
                            opacity: 1,
                          },
                        },
                      }}
                    />
                    <TextField
                      onFocus={({ target }) => {
                        setInputFocus(target.name);
                      }}
                      value={field.docientos}
                      size="small"
                      placeholder="0"
                      id="outlined-basic"
                      name="docientos"
                      variant="outlined"
                      inputProps={{
                        sx: {
                          textAlign: "left",
                          "&::placeholder": {
                            textAlign: "center",
                            color: "black",
                            opacity: 1,
                          },
                        },
                      }}
                    />
                    <TextField
                      onFocus={({ target }) => {
                        setInputFocus(target.name);
                      }}
                      size="small"
                      placeholder="0"
                      value={field.quinientos}
                      id="outlined-basic"
                      name="quinientos"
                      variant="outlined"
                      inputProps={{
                        sx: {
                          textAlign: "left",
                          "&::placeholder": {
                            textAlign: "center",
                            color: "black",
                            opacity: 1,
                          },
                        },
                      }}
                    />
                    <TextField
                      onFocus={({ target }) => {
                        setInputFocus(target.name);
                      }}
                      size="small"
                      placeholder="0"
                      value={field.mil}
                      id="outlined-basic"
                      name="mil"
                      variant="outlined"
                      inputProps={{
                        sx: {
                          textAlign: "left",
                          "&::placeholder": {
                            textAlign: "center",
                            color: "black",
                            opacity: 1,
                          },
                        },
                      }}
                    />
                  </Stack>
                </Box>
              </Grid>
            </Grid>
            <Grid item xs={1}>
              <Grid container> </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid display={"flex"} justifyContent={"center"}>
                <Typography variant="caption" gutterBottom>
                  MONTO A DEPOSITAR
                </Typography>
              </Grid>
              <Grid container>
                <Grid
                  item
                  xs={12}
                  display={"flex"}
                  justifyContent={"center"}
                  sx={{
                    height: 35,
                    borderRadius: 0,
                  }}
                >
                  <Typography variant="h5" gutterBottom>
                    ${amount}
                  </Typography>
                </Grid>
              </Grid>
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

export default Deposit;
