import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    console.log("MONGO_URI =", process.env.MONGO_URI); // ✅ MOVE HERE

    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is undefined");
    }

    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB error:", error.message);
    process.exit(1);
  }
};
