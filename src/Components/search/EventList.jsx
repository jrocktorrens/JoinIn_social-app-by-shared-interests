import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Event from "./Event";
import "./home.css";

const useStyles = makeStyles({
	root: {
		maxWidth: 500,
		margin: 10,
		overflow: "hidden",
	},
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
});

export default function EventList(props) {
	const classes = useStyles();
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
		console.log(props.card);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Card className={classes.root} key="props.key" onClick={handleOpen}>
				<CardMedia
					className="img-card"
					image={`https://images.unsplash.com/photo-1585504198199-20277593b94f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=877&q=80`}
					title="Contemplative Reptile"
				/>
				<CardActionArea>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							padding: 10,
						}}
					>
						<div>
							<b>props.name</b>
							<Typography variant="body2" color="textSecondary" component="p">
								props.status
							</Typography>
						</div>
						<Button size="small" variant="outlined" onClick={handleOpen}>
							See More
						</Button>
					</div>
				</CardActionArea>
			</Card>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className={classes.modal}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 1000,
				}}
			>
				<Fade in={open}>
				<Event/>
				</Fade>
			</Modal>
		</div>
	);
}
