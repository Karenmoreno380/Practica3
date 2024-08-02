import { esquema } from "./Artistas.models.js"
import { model } from "mongoose"

export const modeloalbumes = new model('albumes',esquema)
