import cookieParser from "cookie-parser";
import express, { urlencoded } from "express";
import dotenv, { configDotenv } from "dotenv";
import { getLocationAQI } from "./Controllers/getLocationAQI.js";
import cors from "cors"
import insertAQIrecords from "./Controllers/addData.js";
import getLastSevenHourAQI from "./Controllers/getLastSevenHourAQI.js";

const app = express();
const PORT = 8000;

dotenv.config({
	path: "./.env"
})

app.use(cors({
	origin : "*",
	credentials : true
}))
app.use(express.json());
app.use( urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/getData', getLocationAQI);
app.get('/add', insertAQIrecords);
app.get('/history', getLastSevenHourAQI);

app.listen((PORT), () => {
	console.log(`App listening on port: ${PORT}`);
})