import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// todo import "react-toastify/dist/ReactToastify.css"; bu kisimda best practise index.js e yapistir. 

import { Button, Grid } from "@mui/material";
import { toastSuccessNotify } from "../helper/ToastNotify";

const Brands = () => {

  const notify =()=>toast.success("Wow so easy!")

  return (
    <div>
      Brands
      <Button variant="contained" color="error" onClick={notify}>
        Yunus
      </Button>
      <Button onClick={()=>toastSuccessNotify("Hello")} variant="contained" color="primary">
        Polat
      </Button>
    </div>
  );
};

export default Brands;

//todo <ToastContainer/> bu kismi App.js e yapistir. sonra her yerde calissin...