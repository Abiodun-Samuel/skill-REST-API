import express from "express";
import skillRoutes from "./routes/skillRoutes.js";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";

dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.send("Welcome on Board"));

app.use("/api/skills", skillRoutes);

app.listen(PORT, () => {
  console.log("serving is running on PORT: " + PORT);
});
