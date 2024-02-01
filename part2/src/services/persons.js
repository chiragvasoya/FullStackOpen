import axios from "axios"

const baseUrl = "http://localhost:3001/persons"

// Get all records
const getAll = () => {
    return axios.get(baseUrl)
}

// Add one record
const createOne = (newObject) => {
    return axios.post(baseUrl, newObject)
}

export default { getAll, createOne }