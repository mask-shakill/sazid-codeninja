import mongoose from "mongoose";

export const DBConnect = async () => {
    try {
        const uri = process.env.MONGO_URI as string;

        if (!uri) {
            throw new Error("MongoDB URI is not provided.");
        }

        await mongoose.connect(uri, {
            
        });

        console.log("Database connected");
    } catch (error:any) {
        console.error("Error connecting to database:", error.message);
    }
};
