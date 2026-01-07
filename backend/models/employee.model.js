import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        dob: { type: Date, required: true },
        gender: { type: String, enum: ["male", "female", "others"] },
        education: { type: String },
        company: { type: String },
        experience: { type: Number },
        package: { type: Number },
    },
    { timestamps: true }
);

export default mongoose.model("Employee", employeeSchema);
