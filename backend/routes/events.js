const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/authentication");
const {
	addPet,
	petList,
	addPetImg,
	query,
	returnPet,
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
		const queryResult = await addPet(column, reqValues);
	} catch (err) {
		console.log(err);
		next(err);
	}
});

router.get("/allEvent", async (req, res) => {
	try {
		const petsList = await petList();
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
		await returnPet(petId);
		res.send({ message: "successfully removed that event" });
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;












// router.get("/petImg", async (req, res) => {
// 	try {
// 		const petsList = await addPetImg(req.body);
// 		res.send(petsList);
// 	} catch (err) {
// 		console.log(err);
// 	}
// });