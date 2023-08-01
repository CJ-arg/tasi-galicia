/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { Keybord } from "@/component/Keybord";
import useTimeOut from "@/hooks/useTimeOut";
import { Box, Button, Container, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";

export default function Home() {
  const userMock = { dni: "111", clave: "111" };

  const fieldInitialValue = {
    dni: "",
    clave: "",
    errors: { dni: "error DNI", clave: "error CLAVE" },
  };
  const [inputFocus, setInputFocus] = useState<any>("");
  const [field, setField] = useState<any>(fieldInitialValue);
  const [continuar, setContinuar] = useState<any>(false);

  useTimeOut({
    time: 20000,
    dispatch: () => {
      setField({ ...fieldInitialValue });
    },
    state: [field],
  });

  useEffect(() => {
    JSON.stringify(field) === JSON.stringify(userMock)
      ? setContinuar(true)
      : null;
  }, [field]);

  const handleChange = (value) => {
    setField({ ...field, [inputFocus]: field[inputFocus] + value });
  };

  const handleContinue = () => {
    alert("Continuar");
  };

  const handleBorrar = () => {
    setField(fieldInitialValue);
    setContinuar(false);
  };
  console.log(field.dni.length, "field.dni");
  console.log(field.errors.dni);

  return (
    <>
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
          <h1>Cajero Automatico Tasi </h1>

          <Grid
            container
            sx={{
              backgroundColor: "white",
              padding: 4,
              width: { sm: 850 },
            }}
          >
            <Grid item xs={6}>
              <h3> Ingrese DNI y Clave</h3>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField
                    error={false}
                    label="Error"
                    helperText="DNI debe contener 7 u 8 numeros"
                    focused
                    placeholder="DNI"
                    value={field.dni}
                    id="outlined-basic"
                    name="dni"
                    variant="outlined"
                    onFocus={({ target }) => {
                      setInputFocus(target.name);
                    }}
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
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    placeholder="Clave"
                    value={field.clave}
                    id="outlined-basic"
                    name="clave"
                    variant="outlined"
                    onFocus={({ target }) => {
                      setInputFocus(target.name);
                    }}
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
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Keybord
                handleChange={handleChange}
                continuar={continuar}
                handleContinue={handleContinue}
                handleBorrar={handleBorrar}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
