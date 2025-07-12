import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import colors from "colors";

import router from "./routes/userRoutes.js";



dotenv.config();

const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// routes
app.use("/api/v1/user", router);
app.use('/api/v1/profile', profileRoutes);


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`.bgMagenta.white.bold);
});
