import React, { useContext } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { FaDog } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { GrUserAdmin } from "react-icons/gr";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 200,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  fullList: {
    width: "auto",
  },
  menuIcon: {
    color: "white",
  },
}));

export default function SideBar() {
  const classes = useStyles();
  // const user = useContext(UserContext);

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <CgProfile />
          </ListItemIcon>
          map
          {/* <Link to="/profile">Profile</Link> */}
          <ListItemText />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <CgProfile />
          </ListItemIcon>
          Game events
          {/* <Link to="/search">Search</Link> */}
          <ListItemText />
        </ListItem>
        {/* {user.isAdmin !== 0 && ( */}
        <ListItem button>
          <ListItemIcon>
            <GrUserAdmin />
          </ListItemIcon>
          Find a host
          {/* <Link to="/admin">Admin</Link> */}
          <ListItemText />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <GrUserAdmin />
          </ListItemIcon>
          Create event
          {/* <Link to="/admin">Admin</Link> */}
          <ListItemText />
        </ListItem>
      </List>
    </div>
  );
  return (
    <div>
      {[""].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon className={classes.menuIcon} />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
