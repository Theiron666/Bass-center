import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import PropTypes from "prop-types";
import Slide from "@mui/material/Slide";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { Button } from "@mui/material";
import "./NavBar.css";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { Link } from "react-router-dom";
import { Badge } from "@material-ui/core";
import { useStateValue } from "../../StateProvider";

/* ================================================================== */
/*                              Scroll-hide
/* ================================================================== */
function HideOnScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

/* ================================================================== */
/*                          Nav + Responsive                          */
/* ================================================================== */

export default function NavBar(props) {
  const [open, setOpen] = React.useState(false);

  const [isActive, setActive] = React.useState(false);

  const [{ basket }] = useStateValue();

  const buttonSandw = () => {
    setActive(!isActive);
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className="nav">
          <Toolbar>
            <Link className="tit" to="/">
              <Button className="logo" color="inherit" size="large">
                Bass Center
              </Button>
            </Link>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Button className="font-nav" size="large" color="inherit">
                Crear cuenta
              </Button>
              <Link className="font-link" to="/login">
                <Button
                  className="font-nav"
                  size="large"
                  aria-label="account of current user"
                  color="inherit"
                >
                  Ingresá
                </Button>
              </Link>
              <Link to="checkout-page" className="storeIcon">
                <IconButton color="inherit">
                  <Badge badgeContent={basket?.length} color="error">
                    <LocalGroceryStoreIcon />
                  </Badge>
                </IconButton>
              </Link>
            </Box>

            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                className={isActive ? "change" : null}
                id="toggle"
                size="small"
                aria-label="show more"
                aria-haspopup="true"
                onClick={buttonSandw}
                color="inherit"
              >
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Drawer
        className="drawler"
        variant="persistent"
        anchor="right"
        open={open}
      >
        <List className="listDrawler">
          <Link to="/" onClick={buttonSandw}>
            Profile
          </Link>
          <hr />
          <Link to="/login" onClick={buttonSandw}>
            Ingresar
          </Link>
        </List>
      </Drawer>
    </React.Fragment>
  );
}
