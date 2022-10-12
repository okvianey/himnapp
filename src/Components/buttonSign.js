import * as React from "react";

import {
  Box,
  Button,
  Dialog,
  DialogContent,
} from "@mui/material";
import SignIn from "./signin";
import SignUp from "./signup";

const PopForm = ({ handleClose, open, formType, setForm, setLogged, logged }) => {

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      {formType === "Crear cuenta" ?
        <DialogContent sx={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center"
        }}  >
          <SignUp />

          <Button
            color="secondary"
            variant="text"
            sx={{ m: 1, display: "block" }}
            onClick={()=>{setForm("Iniciar sesión")}}
          >
            ¿Ya tienes una cuenta?
          </Button>
        </DialogContent> :
        <DialogContent sx={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center"
        }}  >
          <SignIn setLogged={setLogged} logged={logged} />

          <Button
            color="secondary"
            variant="text"
            sx={{ m: 1, display: "block" }}
            onClick={() => { setForm("Crear cuenta") }}
          >
            ¿Aún no tienes una cuenta?
          </Button>
        </DialogContent>
      }
    </Dialog>
  )
}

function ButtonSign({ buttonVariant, buttonText, setLogged, logged }) {
  const [ open, setOpen ] = React.useState(false);
  const [ form, setForm ] = React.useState("");

  const handleClickOpen = (e) => {
    setForm(e.target.name);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Button
        name={buttonText}
        variant={buttonVariant}
        sx={{ m: 1, display: "block" }}
        onClick={handleClickOpen}
      >
        {buttonText}
      </Button>
      <PopForm
        open={open}
        formType={form}
        setForm={setForm}
        handleClose={handleClose}
        setLogged={setLogged}
        logged={logged}
      />
    </Box>
  );
}

export default ButtonSign;