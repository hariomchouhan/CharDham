import express from "express";
import { fetchAgentByCity, fetchAllAgent, saveAgent } from "../Controllers/travelingAgent.js";

const router = express.Router();

router.post('/agent/createagent', saveAgent);
router.get('/agent/all', fetchAllAgent);
router.get('/agent/:city', fetchAgentByCity);

export default router;