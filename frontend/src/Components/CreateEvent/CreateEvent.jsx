import TextField from "@material-ui/core/TextField";
import { useState, useEffect } from "react";
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
  const [games, setGames] = useState("");
  const [form, setForm] = useState({});
  const [location, setLocation] = useState();

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setForm({ ...form, event_date: date });
  };

  const handleGames = (event) => {
    setGames(event.target.value);
  };

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    console.log(form);
  }, [form]);

  return (
    <div className={classes.container}>
      <form className={classes.root}>
        <h2>Create a hosting event</h2>
        <TextField
          name="event_name"
          onChange={handleChange}
          id="outlined-basic"
          label="Name of the event"
          variant="outlined"
        />

        <GooglePlaces form={form} setForm={setForm} />

        <TextField
          name="event_note"
          onChange={handleChange}
          id="outlined-basic"
          label="Event notes"
          variant="outlined"
          name="event_notes"
        />

        <FormControl component="fieldset">
          <FormLabel component="legend">No. of participants</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="event_num_attendances"
            value={form.event_num_attendances}
            onChange={handleChange}
          >
            <FormControlLabel value={10} control={<Radio />} label="Up to 10" />
            <FormControlLabel
              value={11}
              control={<Radio />}
              label="More than 10"
            />
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
            name="event_game_id"
            value={form.event_game_id}
            onChange={handleChange}
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
          <button className="form-btn">Create Event</button>
        </div>
      </form>
    </div>
  );
}
