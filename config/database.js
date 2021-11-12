/***************************database connection*********************/
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false

}).then(() => {
	console.log(`connected successfully`);
}).catch((error) => {
	console.log(`not connected : ${error}`);
});