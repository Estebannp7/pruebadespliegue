//traigo libreria que controla variables de entorno
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
console.log(process.env.PORT)

import { ServidorAPI } from './API/ServidorAPI.js'

let servidorhoteles = new ServidorAPI() //instacia de una clase(OBJETO)
servidorhoteles.despertarServidor()


