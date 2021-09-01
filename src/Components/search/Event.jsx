import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AddIcon from "@material-ui/icons/Add";
import axios from "axios";

// import "./pet.css";
// import localforage from "localforage";
// import { UserContext } from "../../lib/context/useContext";

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 1295,
		height: 420,
		margin: "auto",
		marginTop: 100,
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
	},
	bio: {
		width: 350,
	},
}));

export default function Event(props) {
	const classes = useStyles();
	// const user = useContext(UserContext);
	const [favBtnColor, setFavBtnColor] = useState("none");
	const [adoptBtnColor, setAdoptBtnColor] = useState("none");
	const [fosterBtnColor, setFosterBtnColor] = useState("none");

	// const changedStatus = async (status) => {
	// 	const token = await localforage.getItem("token");
	// 	const response = await axios.get("http://localhost:5000/register/getUser", {
	// 		headers: { Authorization: token },
	// 	});
	// 	console.log("ressss", response.data.userId);
	// 	const petUser = response.data;
	// 	const userPet = {
	// 		petStatus: status,
	// 		petId: props.card.pet_id,
	// 		userId: response.data.userId,
	// 	};
	// 	const changedPet = await axios.post(
	// 		"http://localhost:5000/create/status",
	// 		userPet,
	// 		{ headers: { Authorization: token } }
	// 	);
	// 	const changedStatus = changedPet.data;
	// 	console.log("changedStatus:", changedStatus);
	// };

	// const handleAdopt = () => {
	// 	changedStatus("Adopted");
	// 	setAdoptBtnColor("primary");
	// };
	// const handleFoster = () => {
	// 	changedStatus("Foster");
	// 	setFosterBtnColor("primary");
	// };
	// const handleSaveForLater = (e) => {
	// 	changedStatus("Like");
	// 	setFavBtnColor("secondary");
	// };

	return (
		<Card className={classes.root} key={props.key}>
			<CardContent className="card">
				<h1>soccer play Event </h1>
				<h2>Hi my name is {props.name}</h2>
				<h3>event details</h3>
				<ul className="pet-info-list">
					<li>time: {props.color}</li>
					<li>place: {props.weight}</li>
					<li>participants: {props.height}</li>
					<li>payment: {props.status}</li>
					<li>type of game: {props.allergies}</li>
				</ul>
				<Typography
					variant="body2"
					color="textSecondary"
					component="p"
					className={classes.bio}
				>
					<h3>Host name</h3>
					<p>ranking</p>
				</Typography>
				<CardActions disableSpacing>
					Like
					<IconButton
						aria-label="add to favorites"
						color={favBtnColor}
						// onClick={(e) => handleSaveForLater(e)}
					>
						<FavoriteIcon />
					</IconButton>
					I want to be there
					<IconButton
						aria-label="add to favorites"
						// color={adoptBtnColor}
						// onClick={handleAdopt}
					>
						<AddIcon />
					</IconButton>
				</CardActions>
			</CardContent>
			<img
				className="pet-img"
				src={
					props.img ||
					`https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHNvY2NlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60`
				}
			/>
		</Card>
	);
}
