import Express  from "express";
import cors from "cors";
import { VercelResponse } from "@vercel/node";
import { VercelRequest } from "@vercel/node";
 

const app = Express();
app.use(cors());
app.use(Express.json());
const PORT = process.env.PORT || 3000;


// Configuration CORS
const corsOptions = {
  origin: process.env.FRONTEND_URL || "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

// middeware
app.use(cors(corsOptions));
app.use(Express.json());

const tasksHandler = require("./api/tasks").default;

app.all("/api/tasks", async (req: VercelRequest, res: VercelResponse) => {
  await tasksHandler(req, res);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});