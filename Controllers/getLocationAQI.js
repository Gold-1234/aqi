import getClosestStation from "../utils/getClosestStation.js";
import supabase from "../db/supabaseClient.js";
import axios from "axios"

export const getLocationAQI = async ( req, res ) => {
	console.log("getting aqi");
	
	const { longitude, latitude } = req.query;

	// const latitude = 22.552825399911207;
	// const longitude = 88.33568048966158;
	if (!longitude || !latitude) {
    return res.status(400).json({ error: "Missing latitude or longitude" });
  	}
	console.log(longitude, latitude);
	
	
	const closestStation = await getClosestStation( longitude, latitude );

	// console.log("closestStation", closestStation);
	
	const data = await supabase
					.from('aqi_records')
					.select()
					.eq('station', closestStation.station)
					.eq('pollutant_id', 'CO')
					.order('last_update', { ascending: false })
					.limit(1)

	// const d2 =  await axios.get(`https://api.data.gov.in/resource/3b01bcb8-0b14-4abf-b6f2-c1bfd384ba69?api-key=${process.env.CPCB_API_KEY}&format=json`, 
	// 	{
	// 		headers: {
	// 			  'accept': 'application/json'
	// 		},
	// 		params: {
	// 			limit: 5000,
	// 			"filters[longitude]": closestStation.longitude,
	// 			"filters[latitude]": closestStation.latitude
	// 		},
			
	// 	}
	// )

	// console.log( "d2", d2.data );
	
	if(!data){
		return res.status(400).json("no data")
	}
	// console.log(data);
	// console.log("aqi", data.data.records[0]);
	
	return res.status(200).json(data)
}


