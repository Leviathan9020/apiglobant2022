import express from 'express'

//Importo el CONTROLADORHABITACION
import {ControladorHabitacion}from '../controllers/ControlHabitacion.js'

export let rutas=express.Router()

//CREO UN OBJETO DE LA CLASE CONTORLADORHABITACION
let controladorHabitacion = new ControladorHabitacion()

//DEFINO LAS RUTAS

//RUTAS PARA LOS SERVICIOS DE HABITACION

  rutas.post('/apijomar/v1/habitaciones/',controladorHabitacion.insertar)   
  rutas.get('/apijomar/v1/habitaciones/',controladorHabitacion.buscarTodos)  
  rutas.get('/apijomar/v1/habitaciones/:id/',controladorHabitacion.buscarPorId)
  rutas.put('/apijomar/v1/habitaciones/:id/',controladorHabitacion.editar)
  rutas.delete('/apijomar/v1/habitaciones/:id/',controladorHabitacion.eliminar)




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