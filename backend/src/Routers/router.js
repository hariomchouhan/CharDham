import express from "express";
import { saveAgent } from "../Collections/travelingAgent.js";

const router = express.Router();

router.post('/api/createagent', saveAgent);

export default router;