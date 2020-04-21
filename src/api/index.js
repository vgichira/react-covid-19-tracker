import axios from "axios"

const endPoint = "https://covid19.mathdro.id/api"

export const fetchData = async (country) => {
    let url = endPoint;

    if(country){
        url = `${endPoint}/countries/${country}`
    }

    try{
        const {data: {lastUpdate, confirmed, recovered, deaths}} = await axios.get(url)

        const modifiedData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }

        return modifiedData
    }catch(error){

    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${endPoint}/daily`)

        const modifiedData = data.map((dailyData)=> ({
            confirmed:dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            date:dailyData.reportDate
        }))

        return modifiedData;
    } catch (error) {
        console.log(error)
    }
}

export const fetchCountries = async () => {
    try {
        const { data: {countries} } = await axios.get(`${endPoint}/countries`)
        
        return countries
    } catch (error) {
        console.log(error)
    }
}