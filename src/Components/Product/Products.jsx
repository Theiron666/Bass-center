import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@mui/material";
import Product from "./Product";
import products from "./Product-data";

const useStyles = makeStyles({
  gridContainer: {
    paddingBottom: "5rem",
    paddingTop: "5rem",
    Width: "100%",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});

export default function Products() {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={1}
      className={classes.gridContainer}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      {products.map((product) => (
        <Grid item xs={6} sm={3} md={"auto"} key={product.id}>
          <Product product={product} />
        </Grid>
      ))}
    </Grid>
  );
}

// export default function Product() {
//   const classes = useStyles();

//   return (
//     <Grid
//       container
//       spacing={1}
//       className={classes.gridContainer}
//       direction="row"
//       justifyContent="center"
//       alignItems="center"
//     >
//       {products.map((card) => (
//         <Grid item xs={6} sm={3} md={"auto"} key={card.id}>
//           <CardProduct title={card.title} imageSource={card.image} />
//         </Grid>
//       ))}
//     </Grid>
//   );
// }
