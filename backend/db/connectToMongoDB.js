import mongoose from "mongoose";

const connectToMongoDB = async () => {
	try {
		await mongoose.connect("mongodb+srv://yuvaraj25112003:zbus1U363uGyQecU@cluster0.1qyijkl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;
