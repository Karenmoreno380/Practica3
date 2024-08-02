import {Schema, model} from 'mongoose'

export const esquema = new Schema({
    name:{
        type: String
    }
 })

 export const genero = new model('genero', esquema)
