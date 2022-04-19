import express from 'express'

export let rutas=express.Router()

//DEFINO LAS RUTAS

//RUTAS PARA LOS SERVICIOS DE HABITACION
//1.servicio agregar habitacion
rutas.post('/apijomar/v1/habitaciones/', function (req, res) {
    res.send('Hello World')
  })
  //2. servicio para buscar todas las habitaciones
  rutas.get('/apijomar/v1/habitaciones/', function (req, res) {
    res.send('Hello World')
  })


//RUTAS PARA LOS SERVICIOS DE RESERVA