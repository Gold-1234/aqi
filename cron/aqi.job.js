import cron from "node-cron"
import insertAQIrecords from "../Controllers/addData";

cron.schedule("1 * * * *", async () => {
	try {
		console.log(`Starting getAQI cron job : ${new Date().toISOString()}`);
		const count = await insertAQIrecords();
		console.log(`Inserted ${ count } records.`);
		process.exit(0)
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
})