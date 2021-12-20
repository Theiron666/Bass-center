import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Divider from "@mui/material/Divider";
import { Badge } from "@material-ui/core";
import { actionTypes } from "../../Reducer";
import { useStateValue } from "../../StateProvider";
import accounting from "accounting";
import { Link } from "react-router-dom";
import "./Product.css";

export default function Product({
  product: { id, image, title, price, stock },
}) {
  const [, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
        id,
        image,
        title,
        price,
        stock,
      },
    });
  };

  return (
    <Grid item xs={12}>
      <Card className="card" sx={{ maxWidth: 250 }}>
        <CardActionArea>
          <Typography
            className="stockCard"
            gutterBottom
            variant="h1"
            component="div"
          >
            {stock}
          </Typography>
          <CardMedia
            className="imageSection"
            component="img"
            height="140"
            image={image}
            alt="green iguana"
          />
          <CardContent className="titArea">
            <Typography
              className="titCard"
              gutterBottom
              variant="h5"
              component="div"
            >
              {title}
            </Typography>
          </CardContent>

          <Typography
            className="priceCard"
            gutterBottom
            variant="h1"
            component="div"
          >
            {accounting.formatMoney(price, "ARS $")}
          </Typography>
        </CardActionArea>
        <Divider />
        <CardActions className="buySections">
          <Link to="checkout-page">
            <Button
              className="btnBuy"
              size="small"
              color="primary"
              variant="contained"
            >
              Comprar
            </Button>
          </Link>
          <Badge>
            <IconButton
              className="buyIcon"
              color="primary"
              aria-label="add to shopping cart"
              onClick={addToBasket}
            >
              <AddShoppingCartIcon />
            </IconButton>
          </Badge>
        </CardActions>
      </Card>
    </Grid>
  );
}
