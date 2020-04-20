import axios from "axios"

const endPoint = "https://covid19.mathdro.id/api"

export const fetchData = async () => {
    const {data: {lastUpdate, confirmed, recovered, deaths}} = await axios.get(endPoint)

        const modifiedData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }

    return modifiedData
}