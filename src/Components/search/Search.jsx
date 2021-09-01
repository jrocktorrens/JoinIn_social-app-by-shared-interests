import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
// import { UserContext } from "../../lib/context/useContext";
import Grid from "@material-ui/core/Grid";
// import "../welcome/welcome.css";
// import localforage from "localforage";
import EventList from "./EventList";
import SearchElements from "./SearchElements.jsx";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import axios from "axios";
// import ClipLoader from "react-spinners/ClipLoader";

import "./home.css";

const useStyles = makeStyles((theme) => ({
	root: {
		height: "100vh",
	},
	media: {
		height: 140,
	},
	card: {
		maxWidth: 345,
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		border: "2px solid #ffffff",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(1, 1, 1),
		borderRadius: "4px",
		maxWidth: 1000,
		margin: "auto",
	},
	formControl: {
		minWidth: 650,
	},
	submit: {
		margin: 4,
	},
}));

export default function Search() {
	const classes = useStyles();
	// const user = useContext(UserContext);
	const [advancedSearch, setAdvancedSearch] = useState(false);
	const [cardList, setCardList] = useState([]);
	const [searchElements, setSearchElements] = useState({});
	const [searchByType, setSearchByType] = useState({});
	const [empty, setEmpty] = useState(false);
	const [type, setType] = useState("%%");
	const [status, setStatus] = useState("%%");
	const [height, setHeight] = useState("%%");
	const [weight, setWeight] = useState("%%");
	const [name, setName] = useState("%%");
	const [loading, setLoading] = useState(false);

	const isAdvancedSearch = () => {
		setAdvancedSearch(!advancedSearch);
	};

	const filter = () => {
		setSearchElements({
			sType: type,
			sStatus: status,
			sHeight: height,
			sWeight: weight,
			sName: name,
		});
	};

	useEffect(() => {
		setLoading(true);
		axios
			.get(
				`http://localhost:5000/search/search?type=${type}&name=%${name}%&height=%${height}%&status=%${status}%&weight=%${weight}%`
			)
			.then(function (response) {
				setTimeout(() => {
					setLoading(false);
				}, 1500);
				setCardList(response.data);
				if (response.data.length === 0) {
					setEmpty(true);
				} else {
					setEmpty(false);
				}
			});
		if (!type) setType("%%");
		if (!status) setStatus("%%");
		if (!height) setHeight("%%");
		if (!weight) setWeight("%%");
		if (!name) setName("%%");
	}, [searchElements]);

	const simpleSearch = () => {
		setSearchByType({
			sType: type,
		});
	};

	useEffect(() => {
		setLoading(true);
		axios
			.get(`http://localhost:5000/search/byType?type=${type}`)
			.then(function (response) {
				setTimeout(() => {
					setLoading(false);
				}, 1500);
				setCardList(response.data);
				if (response.data.length === 0) {
					setEmpty(true);
				} else {
					setEmpty(false);
				}
			});
		if (!type) setType("%%");
	}, [searchByType]);

	// const loginOnLoad = async (value) => {
	// 	const response = await axios.get(`http://localhost:5000/register/getUser`, {
	// 		headers: { Authorization: value },
	// 	});
	// 	const data = response.data;
	// 	user.setUserName(data.first_name);
	// 	user.setUserLastName(data.last_name);
	// 	user.setEmail(data.email);
	// 	user.setIsAdmin(data.is_admin);
	// 	user.setUserId(data.userId);
	// 	if (data) user.setLoggedIn(true);
	// };

	// useEffect(() => {
	// 	try {
	// 		localforage.getItem("token", async (err, value) => {
	// 			if (err) {
	// 				return console.log(err);
	// 			}
	// 			if (value) {
	// 				const user = await loginOnLoad(value);
	// 				if (user) {
	// 					console.log(user);
	// 				}
	// 			}
	// 		});
	// 	} catch (e) {
	// 		console.log(e);
	// 	}
	// }, []);

	return (
		<div className="search-con">
			<Grid container component="main" className={classes.root}>
				<Grid item xs={true} sm={12} md={12} className="parallax">
					<form style={{ marginTop: 100 }}>
						<div className="title">Lets play together</div>
						<div className={classes.paper}>
							<div>
								<FormControl className={classes.formControl}>
									<InputLabel htmlFor="grouped-select">
										Find your game
									</InputLabel>
									<Select
										defaultValue=""
										id="grouped-select"
										onChange={(e) => setType(e.target.value)}
									>
										<MenuItem value="">
											<em>None</em>
										</MenuItem>
										<MenuItem value={"dog"}>Dogs</MenuItem>
										<MenuItem value={"cat"}>Cats</MenuItem>
										<MenuItem value={"bird"}>Birds</MenuItem>
										<MenuItem value={"rabbit"}>Rabbits</MenuItem>
									</Select>
								</FormControl>
								<Button
									variant="contained"
									color="primary"
									className={classes.submit}
									onClick={advancedSearch ? filter : simpleSearch}
								>
									Search
								</Button>
							</div>
						</div>
					</form>
					{/* {loading && (
						<ClipLoader color="white" loading={true} css="" size={160} />
					)} */}
					{empty && <h2>No Results Found</h2>}
					<div className="list-wrap">
						<div className="list">
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
					</div>
				</Grid>
			</Grid>
		</div>
	);
}
