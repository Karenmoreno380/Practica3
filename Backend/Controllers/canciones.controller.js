import {esquema} from '../models/canciones.models.js';
import {model} from 'mongoose'

export const modelocanciones = new model('canciones',esquema)