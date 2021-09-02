const mysql = require("mysql");
const SQL = require("@nearform/sql");

const db = mysql.createConnection({
	user: "root@localhost",
	host: "ip-172-31-0-22.us-east-2.compute.internal",
	password: "Root1234!",
	database: "JoinIn",
});
exports.db = db;

const query = (queryText) => {
	return new Promise((resolve, reject) => {
		db.query(queryText, (err, data) => {
			if (err) {
				reject(err);
			} else {
				resolve(data);
			}
		});
	});
};
exports.query = query;

const addUser = async (column, values) => {
	try {
		const queryResult = await query(
			`INSERT INTO users (${column}) VALUES (${values});`
		);
		return queryResult;
	} catch (error) {
		console.log(error);
	}
};
exports.addUser = addUser;

const updateUser = async (values, userId) => {
	try {
		const { firstName, lastName, email, phone, password, bio } = values;
		const queryResult = await query(
			`UPDATE users SET first_name="${firstName}", email="${email}", last_name="${lastName}", phone=${phone} WHERE userId=${userId}`
		);
		return queryResult;
	} catch (error) {
		console.log(error);
	}
};
exports.updateUser = updateUser;

const getUserByEmail = async (email, res) => {
	try {
		const queryResult = await query(
			SQL`SELECT * from users WHERE email = ${email}`
		);
		return queryResult[0];
	} catch (error) {
		console.log(error);
	}
};
exports.getUserByEmail = getUserByEmail;

const addEvent = async (column, values) => {
	try {
		const queryResult = await query(
			`INSERT INTO pets (${column}) VALUES (${values});`
		);
		return queryResult;
	} catch (error) {
		console.log(error);
	}
};
exports.addEvent = addEvent;


const eventList = async () => {
	try {
		const queryResult = await query(SQL`SELECT * FROM events`);
		return queryResult;
	} catch (error) {
		console.log(error);
	}
};
exports.eventList = eventList;

const usersList = async () => {
	try {
		const queryResult = await query(SQL`SELECT * FROM users`);
		return queryResult;
	} catch (error) {
		console.log(error);
	}
};
exports.usersList = usersList;

const filterByType = async (type) => {
	try {
		const queryResult =
			await query(SQL`SELECT * FROM pets WHERE type LIKE ${type}`);
		return queryResult;
	} catch (error) {
		console.log(error);
	}
};
exports.filterByType = filterByType;


const returnEvent = async (petId) => {
	try {
		const queryResult = await query(
			SQL`UPDATE pets SET
			adoptionStatus = "available", user_id = null WHERE pet_id = ${petId}`
		);
		return queryResult;
	} catch (error) {
		console.log(error);
	}
};
exports.returnEvent = returnEvent;



