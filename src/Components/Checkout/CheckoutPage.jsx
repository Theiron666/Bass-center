import React from "react";
import { makeStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import CheckoutCard from "./CheckoutCard";
import Total from "./Total";
import { useStateValue } from "../../StateProvider";
import { Button, Card } from "@mui/material";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "15px",
    height: "auto",
  },
  shopContent: {
    width: "100%",
    minHeight: "200px",
  },
  titleShop: {
    marginTop: "1.2rem",
    fontFamily: "Bangers",
    fontSize: "30px",
  },
  items: {
    padding: "0px !important",
    marginBottom: "2rem",
  },
  totSection: {
    borderRadius: "5px",
  },
  button: {
    backgroundColor: "rgb(231, 46, 0)",
  },
}));

const CheckoutPage = () => {
  const [{ basket }] = useStateValue();

  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        {basket?.map((item) => (
          <Grid item xs={6} sm={3} md={"auto"} key={item.id}>
            <CheckoutCard product={item} />
          </Grid>
        ))}
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} className={classes.shopContent}>
          <Typography
            align="center"
            gutterBottom
            variant="h4"
            className={classes.titleShop}
          >
            carrito de compras
          </Typography>
        </Grid>
        <Grid
          container
          className={classes.items}
          item
          xs={12}
          sm={8}
          md={9}
          spacing={0}
        >
          <FormRow />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Card className={classes.totSection}>
            <Typography align="center" gutterBottom variant="h4">
              <Total />
              <Button
                className={classes.button}
                size="small"
                color="primary"
                variant="contained"
              >
                Verificar
              </Button>
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default CheckoutPage;
