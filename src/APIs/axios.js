import axios from "axios";

export const createUser = (username, password) =>{
    return axios.post(`https://builder-backed.herokuapp.com/user/create`, { username, password })
} 

export const getUser = () =>{
    return axios.get("https://builder-backed.herokuapp.com/user/get")
}