const express = require("express");
const router = express.Router();
const {
	addEvent,
	eventList,
	query,
	returnEvent,
} = require("../data/mysql");

router.post("/event", async (req, res) => {
	try {
		const {
			id,
			address,
			name,
			note,
			dateCreate,
			dateEvent,
			participants,
			rank,
			phone,
			hostId,
			mapLon,
			mapLat,
			gameId,
		} = req.body;
		const reqValues = `'${id}', '${address}', '${name}', '${note}', '${dateCreate}', '${dateEvent}','${participants}','${rank}', '${phone}', '${hostId}', '${mapLon}', '${mapLat}','${gameId}'`;
		const column =
			"event_address, event_name, event_note, event_date_created, event_date, event_num_attendances, event_rank, event_phone_number, host_id, event_map_cor_lon, event_map_cor_lat, event_game_id";
		const queryResult = await addEvent(column, reqValues);
	} catch (err) {
		console.log(err);
		next(err);
	}
});

router.get("/allEvent", async (req, res) => {
	try {
		const petsList = await eventList();
		res.send(petsList);
	} catch (err) {
		console.log(err);
	}
});


router.post("/userEvents",  async (req, res) => {
	try {
		const { userId, petId, petStatus } = req.body;
		await query(
			`UPDATE pets SET user_id = ${userId}, adoptionStatus = '${petStatus}'  WHERE pet_id = '${petId}'`
		);
		const event = await getPetById(petId);
		res.send(event);
	} catch (err) {
		console.log(err);
	}
});


router.post("/returnEvent", async (req, res) => {
	try {
		const { petId } = req.body;
        console.log('~ req.body;', req.body);
		await returnEvent(petId);
		res.send({ message: "successfully removed that event" });
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;



