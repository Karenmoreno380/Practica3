import {albumes } from '../Controllers/albumes.controllers.js'

export const test2 = ()=>{
    console.log ('Funciona el controlador de album')
}
albumes .create({
    name:"lp la isla"
})