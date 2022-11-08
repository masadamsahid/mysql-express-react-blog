import express from "express";
import * as dotenv from "dotenv";

import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 8800;

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.listen(PORT,()=>{
  console.log(`Server is running at ${PORT}`);
});