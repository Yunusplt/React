import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";

const TypoButtons = () => {
  return (
    <div>
      <Container maxWidth="md">
        <Typography
          variant="h1"
          color="error"
          align="center"
          sx={{ background: "#eee", mt: 4, border: "1px solid blue" }}
        >
          Typography Button Container Box
        </Typography>

        <Typography variant="button" color="primary">
          Lorem ipsum dolor sit amet.{" "}
        </Typography>
        <Typography variant="button" color="primary.light">
          Lorem ipsum dolor sit amet.{" "}
        </Typography>
        <Typography variant="body1" color="orange" align="center">
          Lorem ipsum dolor sit amet.{" "}
        </Typography>
        {/* body 1 p elementi  olarak algilanir. body2 de yazi kücülür. */}
      </Container>
      <Box
        sx={{ display: "flex", flexDirection: "column", marginTop: 4 }}
        gap={2}
      >
        <Button variant="contained" color="error" endIcon={<SendIcon />}>
          SEND
        </Button>
        <Button
          variant="outlined"
          color="success"
          startIcon={<DeleteIcon color="primary" />}
        >
          DELETE
        </Button>
      </Box>
    </div>
  );
};

export default TypoButtons;
