import axios from "axios";

export function saveAgent(agent) {
    return axios.post('http://localhost:8080/agent/createagent', agent)
}

// export function fetchAllAgents() {
//     return axios.get('http://localhost:8080/agent/');
// }

export function fetchAllAgents(url) {
    return axios.get(`http://localhost:8080/agent/${url}`);
}
export function deleteAgent(id) {
    return axios.delete(`http://localhost:8080/agent/${id}`);
}