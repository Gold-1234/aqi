import supabase from "../db/supabaseClient.js"

const getLastSevenHourAQI = async ( req, res ) => {

	const station = 'Anand Kala Kshetram, Rajamahendravaram - APPCB'
	const pollutant_id = 'PM2.5'
	const data = await supabase
					.from('aqi_records')
					.select()
					.eq('station', station)
					.eq('pollutant_id', pollutant_id)
					.order('last_update', { ascending: false })
					.limit(7)

	console.log(data);
	return res.status(200).json(data)
}

export default getLastSevenHourAQI;