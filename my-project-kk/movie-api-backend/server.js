import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import movieRoutes from "./routes/movie.routes.js";
import errorHandler from "./middlewares/errorHandler.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/movies", movieRoutes);

app.get("/healthy",(req,res)=>{
    res.send("Healthy")
})

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
