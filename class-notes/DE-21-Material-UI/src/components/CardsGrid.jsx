import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

const CardsGrid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);
  console.log(products);
  return (
    <Container>
      <Typography variant="h4" align="center" color={"error"}>
        CARD & GRIDS
      </Typography>

      <Grid container mt={4} spacing={2}>
        {products.map((a) => {
          return (
            <Grid item xs={6} md={4}>
              <Card sx={{ maxWidth: 345, height: 450 }}>
                <CardMedia
                  sx={{ width: 350, height: 200 }}
                  image={a.images[0]}
                />
                {/* gutterBottom = margin bottom */}
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {a.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {a.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    size="small"
                    endIcon={<SendIcon />}
                  >
                    Share
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<DeleteIcon color="primary" />}
                  >
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default CardsGrid;
