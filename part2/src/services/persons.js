import axios from "axios"

const baseUrl = "http://localhost:3001/persons"

// Get all records
const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response=> response.data)
}

// Add one record
const createOne = (newObject) => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

// Delete a record

const deleteOne = (objectId) => {
    const request = axios.delete(`${baseUrl}/${objectId}`)
    return request.then(response => response.data)
}

const updateOne = (objectId, newObject) => {
    const request = axios.put(`${baseUrl}/${objectId}`, newObject)
    return request.then(response => response.data)
}


export default { getAll, createOne, deleteOne, updateOne }