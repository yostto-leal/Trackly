import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import { Server } from "socket.io";

import { connectDB } from "./config/db.js";
import authRoutes from "./routes/auth.js";
import { locationSocket } from "./sockets/locationSocket.js";

dotenv.config();

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" },
});

connectDB();

app.use(cors());
app.use(express.json());

// 🔹 ROTA TEST (fica aqui 👇)
app.get("/", (req, res) => {
  res.send("API OK");
});

app.use("/api/auth", authRoutes);


locationSocket(io);

server.listen(process.env.PORT, () => {
  console.log("Servidor rodando na porta " + process.env.PORT);
});