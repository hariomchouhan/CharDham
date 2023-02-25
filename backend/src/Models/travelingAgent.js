import mongoose from "mongoose";

const agentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    address: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    phone: {type: String, required: true, unique: true},
    website: {type: String}
});

export const AgentModel = mongoose.model('agent', agentSchema);