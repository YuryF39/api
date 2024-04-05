import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";

const app = express ();
dotenv.config();
app.use(express.json());

app.use("/api/users",userRoutes);

app.listen(process.env.PORT,()=>{
    console.log('Servidor corriendo en http://:'+process.env.PORT);
})

//console.log(`Servidor Corriendo en http://${process.env.IP_ADDRESS}:${process.env.PORT}`)
