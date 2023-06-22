import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import useStockCall from "../hooks/useStockCall";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BrandModal({open,handleClose,info, setInfo}) {

      const { postStockData } = useStockCall();
      const { putStockData } = useStockCall();
    
    const handleChange=(e)=>{
        setInfo({...info, [e.target.name] : e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        if (info.id) {
            putStockData("brands", info,info.name)
        }else{
            postStockData("brands",info,info.name)
        }
        handleClose()
        
    }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            component={"form"}
            onSubmit={handleSubmit}
          >
            <TextField
              label="Brand Name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              value={info.name}
              onChange={handleChange}
              required
            />
            <TextField
              label="Brand Image"
              name="image"
              id="image"
              type="text"
              variant="outlined"
              value={info.image}
              onChange={handleChange}
              required
            />
            <Button variant="contained" type="submit">
              {info.id ? "Update Brand" : "Submit Brand"}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
