import Location from "../models/Location.js";

export const locationSocket = (io) => {
  io.on("connection", (socket) => {
    console.log("Cliente conectado");

    socket.on("sendLocation", async (data) => {
      const { orderId, lat, lng } = data;

      await Location.create({ orderId, lat, lng });

      io.emit("locationUpdate", data);
    });
  });
};