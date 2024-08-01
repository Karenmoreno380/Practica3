import {esquema} from '../models/genero.models.js';
import {model} from 'mongoose'

export const modelogenero = new model('genero',esquema)