import {Schema, model} from 'mongoose'


export const esquema = new Schema({
    name:{
        type: String
    }
 })
 

 export const Artista = new model('Artistas', esquema)