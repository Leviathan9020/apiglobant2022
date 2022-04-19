
//importo el paquete express
//const express = require('express')vieja
import express from 'express' //forma actual

//importar las rutas del api
import{rutas} from '../routes/rutas.js'



export class Servidor {

    constructor(){
        //ATRIBUTO APP donde almaceno la funcionalidad de express        
        this.app = express()
        this.atenderServicios()
    }

    encenderServidor(){       
        this.app.use('/',rutas)
    }

    atenderServicios(){
        this.app.get('/', function (req, res) {
            res.send('Hello World')
          })


    }

    conectarconBd(){}
}