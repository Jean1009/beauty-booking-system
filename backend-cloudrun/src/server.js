import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    ok: true,
  });
});

app.post("/api/bookings", (req, res) => {
  console.log(req.body);

  res.json({
    success: true,
  });
});

app.listen(8080, () => {
  console.log("Server running");
});