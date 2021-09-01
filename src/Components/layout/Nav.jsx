import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import "./layout.css";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  loginBtn: {
    fontFamily: "Lilita One",
  },
}));

export default function Nav() {
  const classes = useStyles();
  const [user, setUser] = useState(false);

  return (
    <div className="nav">
      <Toolbar className="font">
        <SideBar />
        <Typography
          className="font"
          className="nav"
          variant="h6"
          className={classes.title}
        ></Typography>
        <a to="/" className="logo-link">
          JOININ
        </a>
      </Toolbar>
    </div>
  );
}
