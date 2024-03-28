import express from "express";
import {usuariosGet, usuariosPost, usuariosPut, usuariosPatch, usuariosDelete} from "../controllers/userController.js";

const userRoutes=express.Router();

//Definiendo rutas y llamando funciones:)

userRoutes.get("/id",async(req,res)=>{
    try {
        const{nombre='null',apellidos='null',edad='null'} = req.body;
        const usuario=await usuariosGet(nombre, apellidos, edad);
        res.status(200).send(usuario);
    } catch (error) {
        console.error("No se pudo consultar el usuario");
        res.status(500).send("Ocurrió un problema mientras se consultaban los datos");
    }

});

userRoutes.post("/create",async(req,res)=>{
    try {
        const{nombre='null',apellidos ='null',edad='null'} = req.body;
        const usuario=await usuariosPost(nombre, apellidos, edad);
        res.status(201).send(usuario);
    } catch (error) {
        console.error("No se pudo crear el usuario");
        res.status(500).send("Ocurrió un problema mientras se creaba el usuario");
    }

});

userRoutes.put("/edit/:id",async(req,res)=>{
    try {
        const {id}=req.params;
        const usuario = await usuariosPut(id);
        res.status(200).send(usuario);
    } catch (error) {
        console.error("No se pudo editar el usuario");
        res.status(500).send("Ocurrió un problema al editar el usuario");
    }
}
)

userRoutes.patch("/update/:id",async(req,res)=>{
    try {
        const {id}=req.params;
        const usuario = await usuariosPatch(id);
        res.status(200).send(usuario);
    } catch (error) {
        console.error("No se pudo actualizar el usuario");
        res.status(500).send("Ocurrió un problema al actualizar el usuario");
    }
}
)

userRoutes.delete("/delete/:id",async(req,res)=>{
    try {
        const {id}=req.params;
        const usuario = await usuariosDelete(id);
        res.status(200).send(usuario);
    } catch (error) {
        console.error("No se pudo eliminar al usuario");
        res.status(500).send("Ocurrió un problema al eliminar el usuario");
    }
}
)
export default userRoutes;