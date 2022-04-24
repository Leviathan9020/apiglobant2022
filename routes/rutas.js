import express from 'express'

//importar las rutas del api
import {ControladorHabitacion}from '../controllers/ControlHabitacion.js'

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

  //3. servicio para buscar hbitaciones por id
  rutas.get('/apijomar/v1/habitaciones/', function (req, res) {
    res.send('Hello World')
  })

  //4.servicio para editar las habitaciones
  rutas.put('/apijomar/v1/habitaciones/', function (req, res) {
    res.send('Hello World')
  })

  //5. servicio para eliminar habitaciones
  rutas.delete('/apijomar/v1/habitaciones/', function (req, res) {
    res.send('Hello World')
  })


//RUTAS PARA LOS SERVICIOS DE RESERVA

//RUTAS PARA LOS SERVICIOS DE RESERVAS
//1.Servicio Agregar reserva
rutas.post('/apijomar/v1/reservas/', function (req, res) {
  res.send('Hello World')
})
//2.Servicio buscar reserva por id
rutas.get('/apiomar/v1/reservas/id/', function (req, res) {
  res.send('Hello World')
})
//3.Servicio editar reserva por id
rutas.put('/apiomar/v1/reservas/id/', function (req, res) {
  res.send('Hello World')
})
//4.Servicio editar reserva por id
rutas.delete('/apiomar/v1/reservas/id/', function (req, res) {
  res.send('Hello World')
})