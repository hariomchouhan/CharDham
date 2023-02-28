import axios from "axios";

export function saveTravel(agent) {
    return axios.post('http://localhost:8080/dharamshala/create', agent)
}

export function TravelTrade(url) {
    return axios.get(`http://localhost:8080/dharamshala/${url}`);
}

export function deleteAgent(id) {
    return axios.delete(`http://localhost:8080/dharamshala/${id}`);
}