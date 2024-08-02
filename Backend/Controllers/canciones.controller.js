import { canciones } from '../models/canciones.models.js'

export const test3 = ()=>{
    console.log ('Funciona el controlador de artistas')
}

canciones.create({
    name:"Rels B"
})
