import { useEffect, useState } from "react";
import { Alert, Button, Container, Dropdown, Table } from "react-bootstrap";
import { deleteAgent, fetchAllAgents } from "../Services/AgentServices.js";

export function AgentList() {
    const [agent, setAgent] = useState([]);
    const fetchAgents = async (url) => {
        const response = await fetchAllAgents(url);
        setAgent(response.data);
        console.log(response.data);
    }
    useEffect(() => {
        fetchAgents("all");
    }, []);

    return (
        <>
            <Container className="mt-5 text-center">
                <Alert variant="success">List of Agents</Alert>
            </Container>
            <Container className="mt-4 mb-4">
                <Dropdown onSelect={(k, e)=>{
                    fetchAgents(e.target.innerHTML);
                }}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Select Task
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {/* All, Pending and Completed ye naam hai woh sab ek tarah se url ka kaam kar rahe hai */}
                        <Dropdown.Item>all</Dropdown.Item>
                        <Dropdown.Item>indore</Dropdown.Item>
                        <Dropdown.Item>bhopal</Dropdown.Item>
                        <Dropdown.Item>kanadia</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Container>
            <Container>
                <Table bordered>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Email</th>
                            <th>Website</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            agent.map((agt) => {
                                return (
                                    <tr className="text-center">
                                        <td>{agt.name}</td>
                                        <td>+91-{agt.phone}</td>
                                        <td>{agt.street}, {agt.city}, {agt.state}</td>
                                        <td>{agt.email}</td>
                                        <td>{agt.website}</td>
                                        <td><Button variant="danger" className="btn-sm" onClick={async()=>{
                                            await deleteAgent(agt._id);
                                            fetchAgents("all");
                                        }}>Remove</Button>
                                        {/* <Button variant="primary" className="btn-sm mx-5">Edit List</Button> */}
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Container>
        </>
    );
}