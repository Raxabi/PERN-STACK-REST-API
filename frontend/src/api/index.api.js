import axios from "axios"

export const sendTasks = (options) => {
    return axios.post("http://localhost:5000", options)
};