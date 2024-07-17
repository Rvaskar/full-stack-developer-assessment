import express from "express";
import mongoose from "mongoose";
import cors from "cors";
// import projectRoutes from "./routes/project.js";
// import courseRoutes from "./routes/course.js";
// import certificateRoutes from "./routes/certificate.js";
// import contactRoutes  from "./routes/contact.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("This is rutik's personal portfolio API");
});

// app.use("/project", projectRoutes);
// app.use("/course", courseRoutes);
// app.use("/certificate", certificateRoutes);
// app.use("/contact", contactRoutes );

// const PORT = process.env.PORT || 5000;
const DATABASE_URL = process.env.CONNECTION_URL;

const PORT = process.env.PORT || 5000;

mongoose
  .connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    })
  )
  .catch((err) => console.log(err.message));
