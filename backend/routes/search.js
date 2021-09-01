const express = require("express");
const router = express.Router();
const { filterList, filterByType } = require("../data/mysql");

router.get("/search", async (req, res) => {
	try {
		const type = req.query.type;
		const name = req.query.name;
		const status = req.query.status;
		const height = req.query.height;
		const weight = req.query.weight;
		const searchResults = await filterList(type, name, status, height, weight);
		res.send(searchResults);
	} catch (err) {
		console.log(err);
	}
});

router.get("/byType", async (req, res) => {
	try {
		const type = req.query.type;
		const searchResults = await filterByType(type);
		res.send(searchResults);
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;
