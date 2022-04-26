
//importo el paquete express
//const express = require('express')vieja
import express from 'express' //forma actual

//importar las rutas del api
import{rutas} from '../routes/rutas.js'

//Importar la conexion con BD
import {conectar} from '../database/conexion.js'



export class Servidor {

    constructor(){
        //ATRIBUTO APP donde almaceno la funcionalidad de express        
        this.app = express()
        this.conectarconBd()        
        this.llamarAuxiliares()
        this.atenderServicios()  
        
        
    }

    encenderServidor(){       
        this.app.listen(process.env.PORT,function(){
            console.log(`Servidor encendido en ${process.env.PORT}`)
        })
    }

    atenderServicios(){
        this.app.use('/',rutas)

    }

    conectarconBd(){
        conectar()
    }

    llamarAuxiliares(){
        //ACTIVO LA RECEPCIÓN DE DATOS POR EL BODY DE LA PETICION
        this.app.use(express.json())
    }
}