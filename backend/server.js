import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import colors from "colors";
import path from "path";

//Routes Imported
import router from "./routes/userRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import userProfileRoutes from "./routes/userProfileRoutes.js";
import authMiddleware from "./middlewares/authMiddleware.js";
import postRoutes from "./routes/postRoutes.js";

dotenv.config();

const app = express();


console.log('JWT_SECRET:', process.env.JWT_SECRET);

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// routes
app.use("/api/v1/auth", router);
app.use('/api/v1/profile', profileRoutes);
app.use('/api/v1/userProfile', userProfileRoutes);
app.use("/api/posts", postRoutes);
//multer
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`.bgMagenta.white.bold);
});
