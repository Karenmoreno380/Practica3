import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { test } from './Backend/Controllers/Artistas.controllers.js';
import { test2 } from './Backend/Controllers/albumes.controllers.js';
import { test3 } from './Backend/Controllers/canciones.controller.js';
import { test4 } from './Backend/Controllers/genero.controllers.js';

dotenv.config();
mongoose.connect(process.env.urldb)
.then (()=> {
    console.log("Si funciona la base de datos")
})
.catch((error)=>{
    console.log ("No funciona la base de datos")
})
const app =express();
app.use (cors());

app.listen(4006,()=>{
    console.log ('Funciona mi servidor')
})

test();
test2();
test3();
test4();
