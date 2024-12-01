import mongoose from "mongoose";


export const connectDB=async()=> {
  try {
  
    await mongoose.connect(
      "mongodb+srv://pavan:dE7w5wKe9qI8phLH@cluster0.solqv.mongodb.net/hello-app?retryWrites=true&w=majority&appName=Cluster0",
    
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  
  } catch (error) {
    console.log("MongoDB connection error:",error);
  }
}
 





// export const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGODB_URI);
//     console.log(`MongoDB connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.log("MongoDB connection error:", error);
//   }
// };
