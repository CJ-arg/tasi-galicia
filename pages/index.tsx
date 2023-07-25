import { Keybord } from "@/component/Keybord";
import { Box, Button, Container, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";

export default function Home() {
  const userMock = { dni: "111", clave: "111" };
  const fieldInitialValue = { dni: "", clave: "" };
  const [inputFocus, setInputFocus] = useState<any>("");
  const [field, setField] = useState<any>(fieldInitialValue);
  const [continuar, setContinuar] = useState<any>(false);
  useEffect(() => {
    JSON.stringify(field) === JSON.stringify(userMock)
      ? setContinuar(true)
      : null;
  }, [field, continuar, userMock]);

  const handleChange = (value) => {
    console.log(value, "aaa");
    value !== "Borrar"
      ? setField({ ...field, [inputFocus]: field[inputFocus] + value })
      : (setField(fieldInitialValue), setContinuar(false));
  };

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
                    placeholder="dni"
                    value={field.dni}
                    id="outlined-basic"
                    name="dni"
                    variant="outlined"
                    onFocus={({ target }) => {
                      setInputFocus(target.name);
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    placeholder="clave"
                    value={field.clave}
                    id="outlined-basic"
                    name="clave"
                    variant="outlined"
                    onFocus={({ target }) => {
                      setInputFocus(target.name);
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Keybord
                handleChange={handleChange}
                setContinuar={setContinuar}
                continuar={continuar}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
