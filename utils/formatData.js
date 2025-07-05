import dayjs from "dayjs";

import customParseFormat from "dayjs/plugin/customParseFormat.js";

dayjs.extend(customParseFormat);

const formatData = ( records ) => {
	return records.map((r) => ({
		country: r.country,
		state: r.state,
		city: r.city,
		station: r.station,
		pollutant_id: r.pollutant_id,
		last_update: new Date(r.last_update),
		latitude: parseFloat(r.latitude),
		longitude: parseFloat(r.longitude),
		min_value: parseFloat(r.min_value),
		max_value: parseFloat(r.max_value),
		avg_value: parseFloat(r.avg_value),
	}))
}

export default formatData;

// console.log(dayjs('05-07-2025 16:00:00',"DD-MM-YYYY HH:mm:ss", "Asia/Kolkata").toISOString())