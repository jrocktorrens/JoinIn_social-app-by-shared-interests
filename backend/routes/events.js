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
			petType,
			name,
			status,
			breed,
			color,
			allergies,
			petWeight,
			petHeight,
			diet,
			img,
			bio,
		} = req.body;
		const reqValues = `'${id}', '${petType}', '${name}', '${status}', '${breed}', '${color}','${allergies}','${petWeight}', '${petHeight}', '${diet}', '${img}', '${bio}'`;
		const column =
			"pet_id, type, name, adoptionStatus, breed, color, allergies, weight, height, diet, img, bio";
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
		const pet = await getPetById(petId);
		res.send(pet);
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



