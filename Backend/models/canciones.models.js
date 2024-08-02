import { esquema } from "./Artistas.models.js";
import { model } from "mongoose"


export const canciones = new model('canciones', esquema)
