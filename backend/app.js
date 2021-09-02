const express = require("express");
const app = express();
const port = process.env.PORT || 6000;

app.use("/users", require("./routes/users"));
app.use("/events", require("./routes/events"));
app.use("/search", require("./routes/search"));

app.listen(port, () => {
	console.log(`im ready to work on port ${port}`);
});

module.exports = app;
