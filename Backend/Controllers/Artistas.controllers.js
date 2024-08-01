import { Artista } from '../models/Artistas.models.js'

export const test = ()=>{
    console.log ('Funciona el controlador de artistas')
}

Artista.create({
    name:"Rels B"
})