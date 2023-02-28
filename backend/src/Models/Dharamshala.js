import mongoose from "mongoose";

const dharamshalaSchema = new mongoose.Schema({
    name: { type: String, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
    website: { type: String }
});

export const DharamshalaModel = mongoose.model('dharamshala', dharamshalaSchema);