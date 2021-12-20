import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import DeleteIcon from "@material-ui/icons/Delete";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../Reducer";
import accounting from "accounting";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  iconDelete: {
    color: "red",
  },
  textDelete: {
    fontFamily: "Orbitron",
    margin: "0",
    fontSize: "1.2rem",
  },
}));

export default function CheckoutCard({
  product: { id, image, title, price, stock },
}) {
  const classes = useStyles();

  const [, dispatch] = useStateValue();

  const removeItem = () =>
    dispatch({
      type: actionTypes.REMOVE_ITEM,
      id: id,
    });

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
            component="img"
            height="140"
            image={image}
            alt="green iguana"
          />
          <CardContent>
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
            {accounting.formatMoney(price, "$")}
          </Typography>
        </CardActionArea>
        <Divider />
        <CardActions className="buySections">
          <Typography
            className={classes.textDelete}
            gutterBottom
            variant="h5"
            component="div"
          >
            Eliminar
          </Typography>
          <IconButton
            className={classes.iconDelete}
            color="primary"
            aria-label="delete"
            onClick={removeItem}
          >
            <DeleteIcon fontSize="large" />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}
