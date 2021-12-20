import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { getBasketTotal } from "../../Reducer";
import { useStateValue } from "../../StateProvider";
import accounting from "accounting";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Total = () => {
  const [{ basket }] = useStateValue();

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h5>Total items: {basket?.length}</h5>
      <h5>{accounting.formatMoney(getBasketTotal(basket), "$")}</h5>
    </div>
  );
};

export default Total;
