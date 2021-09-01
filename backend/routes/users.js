const express = require("express");
const SQL = require("@nearform/sql");
const router = express.Router();
const {
	addUser,
	query,
	updateUser,
	usersList,
	getUserByEmail,
} = require("../data/mysql");

router.post("/register", async (req, res, next) => {
	try {
		const { firstName, lastName, phoneNum, email, password } = req.body;
		const reqValues = `'${firstName}', '${email}', '${phoneNum}', '${password}', '${lastName}'`;
		const column = "first_name, email, phone, password, last_name";
		const user = await getUserByEmail(req.body.email);
		const queryResult = await addUser(column, reqValues);
		const newUser = await query(
			SQL`SELECT * FROM users ORDER BY userId DESC LIMIT 1;`
		);
		res.send({ user: newUser[0] });
	} catch (err) {
		console.log(err);
		next(err.sqlMessage);
	}
});

router.post("/login", async (req, res, next) => {
	try {
		const user = await getUserByEmail(req.body.email);
		if (!user) {
			res.send({ err: "We didnt find this user" });
			return;
		}
		res.send({ text: "valid login input", user });
	} catch (error) {
		console.log(error);
		next(error);
	}
});

router.put("/updateUser", async (req, res, next) => {
	try {
		const userId = req.query.id;
		const updated = await updateUser(req.body, userId);
		res.send(updated);
	} catch (err) {
		next(err);
	}
});

router.get("/getUser", async (req, res) => {
	try {
		const { appUserId } = req.decoded;
		const user = await query(`SELECT * FROM users WHERE userId = ${appUserId}`);
		res.send(user[0]);
	} catch (err) {
		console.log(err);
	}
});

router.get("/usersList", async (req, res) => {
	try {
		const users = await usersList();
		res.send(users);
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;
