import React, { useState, useContext, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import localforage from "localforage";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import EventList from "../search/EventList";
// import { UserContext } from "../../lib/context/useContext";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Event from "../search/Event";
import axios from "axios";
import "./profile.css";


const useStyles = makeStyles((theme) => ({
	root: {
		height: "100vh",
	},
	image: {
		backgroundImage: `url(https://images.unsplash.com/photo-1547638375-ebf04735d792?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGdhbWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60)`,
		backgroundRepeat: "no-repeat",
		backgroundColor:
			theme.palette.type === "light"
				? theme.palette.grey[50]
				: theme.palette.grey[900],
		backgroundSize: "cover",
		backgroundPosition: "center",
	},
	paper: {
		margin: theme.spacing(7, 4),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: "100%",
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function Profile() {
	const classes = useStyles();
	// const user = useContext(UserContext);
	const [updateName, setUpdateName] = useState();
	const [updateLastName, setUpdateLastName] = useState();
	const [updatePassword, setUpdatePassword] = useState();
	const [updateEmail, setUpdateEmail] = useState();
	const [updatePhone, setUpdatePhone] = useState();
	const [updateBio, setUpdateBio] = useState();
	const [userUpdate, setUserUpdate] = useState({});
	const [cardList, setCardList] = useState([]);

	// const handleSaveChanges = () => {
	// 	setUserUpdate({
	// 		firstName: updateName || user.userName,
	// 		lastName: updateLastName || user.userLastName,
	// 		email: updateEmail || user.email,
	// 		password: updatePassword || user.password,
	// 		phone: updatePhone || user.userPhone,
	// 		bio: updateBio || user.userName,
	// 	});
	// };

	// useEffect(() => {
	// 	axios
	// 		.put(
	// 			`http://localhost:5000/register/updateUser?id=${user.userId}`,
	// 			userUpdate
	// 		)
	// 		.then((res) => {
	// 			console.log(res);
	// 		});
	// }, [userUpdate]);

	// const showAdopted = async () => {
	// 	const token = await localforage.getItem("token");
	// 	const response = await axios.get(`http://localhost:5000/create/userPets`, {
	// 		headers: { Authorization: token },
	// 	});
	// 	if (response.data) {
	// 		setCardList(response.data);
	// 	}
	// };
	// const showLiked = async () => {
	// 	const token = await localforage.getItem("token");
	// 	const response = await axios.get(`http://localhost:5000/create/liked`, {
	// 		headers: { Authorization: token },
	// 	});
	// 	if (response.data) {
	// 		console.log(response.data);
	// 		setCardList(response.data);
	// 	}
	// };
	useEffect(async() => {
			const response = await axios.get(`http://localhost:5000/create/petList`);
			if (response.data) {
				console.log(response.data);
				setCardList(response.data);
			}
	}, [])

	return (
		<div style={{ display: "flex" }}>
			<div className="my-events">
				<h1>My Events</h1>
						{cardList.map((card, i) => (
							<EventList
								card={card}
								breed={card.breed}
								color={card.color}
								type={card.type}
								key={i}
								name={card.name}
								status={card.adoptionStatus}
								img={card.img}
								weight={card.weight}
								height={card.height}
								diet={card.diet}
								allergies={card.allergies}
								bio={card.bio}
								id={card.pet_id}
							/>
						))}
			</div>
			<Grid item xs={10} sm={8} md={5} component={Paper} elevation={3} square>
				<div className={classes.paper}>
					<img
						className="img"
						src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
					/>
					<Typography component="h1" variant="h5">
						<h2>you're Logged in as </h2>
						<h3>
							Edit Your Profile
							<TextField
								autoComplete="name"
								name="firstName"
								variant="outlined"
								required
								fullWidth
								id="firstName"
								label="first name"
								autoFocus
								onChange={(e) => setUpdateName(e.target.value)}
							/>
							<TextField
								autoComplete="last name"
								name="lastName"
								variant="outlined"
								required
								fullWidth
								id="lastName"
								label="last name"
								autoFocus
								onChange={(e) => setUpdateLastName(e.target.value)}
							/>
							<TextField
								autoComplete="email"
								name="email"
								variant="outlined"
								required
								fullWidth
								id="email"
								label="your email"
								autoFocus
								onChange={(e) => setUpdateEmail(e.target.value)}
							/>
							<TextField
								autoComplete="phone"
								name="phone"
								variant="outlined"
								type="number"
								required
								fullWidth
								id="phone"
								label="phone number"
								autoFocus
								onChange={(e) => setUpdatePhone(e.target.value)}
							/>
							<TextField
								autoComplete="password"
								name="password"
								variant="outlined"
								required
								fullWidth
								id="password"
								label="your password"
								autoFocus
								onChange={(e) => setUpdatePassword(e.target.value)}
							/>
							<TextField
								autoComplete="name"
								name="firstName"
								variant="outlined"
								required
								fullWidth
								id="firstName"
								label="Add bio"
								autoFocus
								onChange={(e) => setUpdateBio(e.target.value)}
							/>
						</h3>
						<Button
							color="inherit"
							className="font"
							// onClick={handleSaveChanges}
						>
							Save and Send
						</Button>
					</Typography>
				</div>
			</Grid>
		</div>
	);
}
