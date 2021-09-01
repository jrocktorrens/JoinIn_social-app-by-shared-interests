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
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import GooglePlaces from "./GooglePlaces";

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

export default function CreateEvent() {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [value, setValue] = useState("female");
  const [games, setGames] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleGender = (event) => {
    setValue(event.target.value);
  };

  const handleGames = (event) => {
    setGames(event.target.value);
  };

  return (
    <div className={classes.container}>
      <form className={classes.root}>
        <h2>Create a hosting event</h2>
        <TextField
          id="outlined-basic"
          label="Name of the event"
          variant="outlined"
        />
        <GooglePlaces />

        <TextField id="outlined-basic" label="Location" variant="outlined" />

        <FormControl component="fieldset">
          <FormLabel component="legend">Location</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={value}
            onChange={handleGender}
          >
            <FormControlLabel
              value="Public property"
              control={<Radio />}
              label="Public property"
            />
            <FormControlLabel
              value="Private home"
              control={<Radio />}
              label="Private home"
            />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
        <FormControl component="fieldset">
          <FormLabel component="legend">No. of participants</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={value}
            onChange={handleGender}
          >
            <FormControlLabel
              value="<10"
              control={<Radio />}
              label="Up to 10"
            />
            <FormControlLabel
              value=">10"
              control={<Radio />}
              label="More than 10"
            />
          </RadioGroup>
        </FormControl>
        <FormControl component="fieldset">
          <FormLabel component="legend">Type of event</FormLabel>
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
        <div>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justifyContent="space-around">
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Date"
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
              <KeyboardTimePicker
                margin="normal"
                id="time-picker"
                label="Time"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change time",
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
        </div>
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
