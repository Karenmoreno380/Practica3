import {esquema} from '../models/albumes.models';
import {model} from 'mongoose'

export const modeloalbumes = new model('albumes',esquema)