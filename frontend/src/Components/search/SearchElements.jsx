import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 320,
	},
	root: {
		display: "flex",
		flexWrap: "wrap",
	},
	margin: {
		margin: theme.spacing(1),
	},
	withoutLabel: {
		marginTop: theme.spacing(3),
	},
	textField: {
		width: "25ch",
	},
	name: {
		margin: 10,
	},
}));

export default function ControlledOpenSelect(props) {
	const classes = useStyles();

	return (
		<div>
			<div style={{ display: "flex", justifyContent: "space-around" }}>
				<FormControl className={classes.formControl}>
					<InputLabel htmlFor="grouped-select">Adoption status</InputLabel>
					<Select
						defaultValue=""
						id="grouped-select"
						onChange={(e) => props.setStatus(e.target.value)}
					>
						<MenuItem value="">
							<em>None</em>
						</MenuItem>
						<MenuItem value={"adopted"}>adopt</MenuItem>
						<MenuItem value={"fostered"}>foster</MenuItem>
						<MenuItem value={"waiting"}>waiting</MenuItem>
					</Select>
				</FormControl>
				<TextField
					type="number"
					label="Weight"
					id="standard-start-adornment"
					className={clsx(classes.margin, classes.textField)}
					onChange={(e) => props.setWeight(e.target.value)}
				/>
				<TextField
					type="number"
					label="Height"
					id="standard-start-adornment"
					className={clsx(classes.margin, classes.textField)}
					onChange={(e) => props.setHeight(e.target.value)}
				/>
			</div>
			<div style={{ display: "flex" }}>
				<TextField
					variant="outlined"
					required
					fullWidth
					id="name"
					label="Name"
					name="email"
					autoComplete="name"
					className={classes.name}
					onChange={(e) => props.setName(e.target.value)}
				/>
			</div>
		</div>
	);
}
