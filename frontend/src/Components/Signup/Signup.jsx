import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "700px",
      display: "flex",
      justifyContent: "center",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
}));

export default function Signup() {
  const classes = useStyles();

  const [value, setValue] = useState("female");
  const [games, setGames] = useState("");

  const handleGender = (event) => {
    setValue(event.target.value);
  };

  const handleGames = (event) => {
    setGames(event.target.value);
  };

  return (
    <div className={classes.container}>
      <form className={classes.root}>
        <h2>Sign up to Joinin</h2>
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField
          type="password"
          id="outlined-basic"
          label="Password"
          variant="outlined"
        />
        <TextField id="outlined-basic" label="Name" variant="outlined" />

        <FormControl component="fieldset">
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={value}
            onChange={handleGender}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
        <FormControl component="fieldset">
          <FormLabel component="legend">Smoker</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={value}
            onChange={handleGender}
          >
            <FormControlLabel value="yes" control={<Radio />} label="No" />
            <FormControlLabel value="no" control={<Radio />} label="Yes" />
            <FormControlLabel
              value="half"
              control={<Radio />}
              label="On occasion"
            />
          </RadioGroup>
        </FormControl>
        <FormControl component="fieldset">
          <FormLabel component="legend">Keeping Kosher</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={value}
            onChange={handleGender}
          >
            <FormControlLabel value="no" control={<Radio />} label="Yes" />
            <FormControlLabel value="yes" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>

        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">Games</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={games}
            onChange={handleGames}
            label="Games"
          >
            <MenuItem value="Table top">Table top</MenuItem>
            <MenuItem value="Video games">Video games</MenuItem>
            <MenuItem value="Bar games">Bar games</MenuItem>
            <MenuItem value="Board games">Board games</MenuItem>
            <MenuItem value="Card games">Card games</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            Location
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={games}
            onChange={handleGames}
            label="Location"
          >
            <MenuItem value="Northern Israel">Northern Israel</MenuItem>
            <MenuItem value="Center Israel">Center Israel</MenuItem>
            <MenuItem value="Southern Israel">Southern Israel</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            Speaking
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={games}
            onChange={handleGames}
            label="Speaking"
          >
            <MenuItem value="JavaScript">JavaScript</MenuItem>
            <MenuItem value="C#">C#</MenuItem>
            <MenuItem value="Python">Python</MenuItem>
          </Select>
        </FormControl>
        <div className="btn-container">
          <button className="form-btn">Sign Up</button>
        </div>
      </form>
    </div>
  );
}

// sex - m/n
// diet -drop down
// smokes - t/f
// kosher - t/f
// games - drop down
// lagnuages - drop down
