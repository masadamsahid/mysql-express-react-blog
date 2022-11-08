import express from "express";
import cookieParser from "cookie-parser";
import multer from "multer";
import * as dotenv from "dotenv";

import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 8800;

app.use(express.json());
app.use(cookieParser());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({storage});

app.post('/api/upload', upload.single('file'), (req, res) => {
  res.status(200).json("Image has been uploaded.");
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.listen(PORT,()=>{
  console.log(`Server is running at ${PORT}`);
});