import express from "express";
import { deleteDharamshalaById, fetchAllDharamshala, fetchDharamshalaByCity, saveDharamshala } from "../Controllers/Dharamshala.js";
import { deleteAgentById, fetchAgentByCity, fetchAllAgent, saveAgent } from "../Controllers/travelingAgent.js";

const router = express.Router();

/**Dharamshala Routes */
router.post('/dharamshala/create', saveDharamshala);
router.get('/dharamshala/all', fetchAllDharamshala);
router.get('/dharamshala/:city', fetchDharamshalaByCity);
router.delete('/dharamshala/:id', deleteDharamshalaById);

/**Agent Routes */
router.post('/agent/createagent', saveAgent);
router.get('/agent/all', fetchAllAgent);
router.get('/agent/:city', fetchAgentByCity);
router.delete('/agent/:id', deleteAgentById);

export default router;