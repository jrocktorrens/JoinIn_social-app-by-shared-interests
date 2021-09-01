const Ajv = require("ajv").default;
const ajv = new Ajv();

const validationMid = (schema) => {
	return (req, res, next) => {
		try {
			const validate = ajv.compile(schema);
			const valid = validate(req.body);
			if (!valid) {
				throw new Error("invalid input");
			}
			next();
		} catch (error) {
			res.status(400).send(error.message);
		}
	};
};

exports.validationMid = validationMid;
