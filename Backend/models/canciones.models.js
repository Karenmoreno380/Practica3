import {canciones } from '../Controllers/canciones.controller.js'

export const test3 = ()=>{
    console.log ('Funciona el controlador de la cancion')
}
canciones .create({
    name:"la ultima cancion"
})
