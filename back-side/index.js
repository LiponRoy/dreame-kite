const express = require('express');
const app = express();
const cors = require('cors');
const body_parser = require('body-parser');
const dotenv = require('dotenv');
// configuration dot env file
dotenv.config({ path: 'config.env' });

// middleware all
app.use(cors);
app.use(express.json());
app.use(body_parser);

// make server
app.listen(process.env.PORT, () => {
	console.log(`server is running on port ${process.env.Port}`);
});
