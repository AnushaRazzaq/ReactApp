import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import userService from "../Services/UserService";
const useStyles = makeStyles((theme) => ({
  link: {
    color: "white",
    paddingRight: "1rem",
    textDecoration:"none",
  },
  bg:{
    backgroundColor:"lightgray",
   
  }
}));

const TopMenu = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.bg} >
      <Toolbar>
        <h2>
          SkinCareDox
        </h2>
        &nbsp;
        &nbsp;
        &nbsp;
        <Typography variant="h6">
          <Link to="/" className={classes.link}>
            Home
          </Link>
        </Typography>
        <Typography variant="h6" >
          <Link to="/products" className={classes.link}>
            Products
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link to="/products/new" className={classes.link}>
            New Product
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link to="/Reviews" className={classes.link}>
            Reviews
          </Link>
        </Typography>
        {!userService.isLoggedIn() ? (
          <>
            <Typography variant="h6">
              <Link to="/login" className={classes.link}>
                Login
              </Link>
            </Typography>
            <Typography variant="h6" >
              <Link to="/register" className={classes.link}>
                Register
              </Link>
            </Typography>
          </>
        ) : (
          <Button
            variant="contained"
            color="gray"
            onClick={(e) => {
              userService.logout();
              window.location.reload();
            }}
          >
            LogOut {userService.getLoggedInUser().name}
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default TopMenu;