const mysql = require("mysql");
const Postgrator = require("postgrator");
const SQL = require("@nearform/sql");

const db = mysql.createConnection({
	user: "root",
	host: "localhost",
	password: "0522689870",
	database: "practice",
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

const addPet = async (column, values) => {
	try {
		const queryResult = await query(
			`INSERT INTO pets (${column}) VALUES (${values});`
		);
		return queryResult;
	} catch (error) {
		console.log(error);
	}
};
exports.addPet = addPet;


const petList = async () => {
	try {
		const queryResult = await query(SQL`SELECT * FROM pets`);
		return queryResult;
	} catch (error) {
		console.log(error);
	}
};
exports.petList = petList;

const usersList = async () => {
	try {
		const queryResult = await query(SQL`SELECT * FROM users`);
		return queryResult;
	} catch (error) {
		console.log(error);
	}
};
exports.usersList = usersList;

const filterList = async (type, name, status, height, weight) => {
	try {
		const queryResult =
			await query(SQL`SELECT * FROM pets WHERE type LIKE ${type}
			AND name LIKE ${name} 
            AND adoptionStatus like ${status} 
            AND height like ${height} 
            AND weight like ${weight} 
			`);
		return queryResult;
	} catch (error) {
		console.log(error);
	}
};
exports.filterList = filterList;

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


const addPetImg = async (values, userId) => {
	try {
		const { petImg } = values;
		const queryResult = await query(
			`UPDATE pets SET img="${petImg}" WHERE pet_id=${userId}`
		);
		return queryResult;
	} catch (error) {
		console.log(error);
	}
};
exports.addPetImg = addPetImg;

const returnPet = async (petId) => {
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
exports.returnPet = returnPet;

const postgrator = new Postgrator({
	migrationDirectory: "./migrations",
	driver: "mysql",
	host: "127.0.0.1",
	port: 3306,
	database: "practice",
	username: "root",
	password: "0522689870",
	schemaTable: "Migrations",
});
exports.postgrator = postgrator;

