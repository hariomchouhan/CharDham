import { StatusCodes } from "http-status-codes";
import { AgentModel } from "../Models/travelingAgent.js";

export async function saveAgent(request, response) {
    try {
        const agent = new AgentModel(request.body);
        const savedAgent = await agent.save();
        response.status(StatusCodes.CREATED).json(savedAgent);
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
}