import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
      display: "flex",
    },
  },
}));

export default function Signup() {
  const classes = useStyles();

  return (
    <form className={classes.root}>
      <h2>Sign up as a host</h2>
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <TextField
        type="password"
        id="outlined-basic"
        label="Password"
        variant="outlined"
      />
      <TextField id="outlined-basic" label="Name" variant="outlined" />
    </form>
  );
}
