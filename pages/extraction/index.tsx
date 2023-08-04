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

const Extraction = () => {
  const { user, setAmountOperation } = useStore();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const handleContinue = () => {
    setAmountOperation("7500");
    router.push("/success");
  };
  useEffect(() => {
    Object.keys(user).length > 0 ? setIsLoading(false) : router.push("/");
  }, []);

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
                  width: { sm: 350 },
                  height: { sm: 180 },
                  border: "1px solid",
                  padding: 2,
                }}
              >
                <Grid item xs={6}>
                  <Grid item xs={12}>
                    <FormControl>
                      <RadioGroup
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
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </Grid>
              </Box>
              <Box
                sx={{
                  width: { sm: 350 },
                  height: { sm: 180 },
                  border: "1px solid",
                  padding: 2,
                  marginBottom: 5,
                }}
              >
                <Grid item xs={6}>
                  <Grid item xs={12}>
                    <FormControl>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                        sx={{
                          padding: 1,
                        }}
                      >
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
                          value="other"
                          control={<Radio />}
                          label="Otro monto"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Stack direction="row" spacing={50} justifyContent={"center"}>
              <Button
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
