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
import {ControladorReservacion}from '../controllers/ControlReserva.js'

export let rutasR=express.Router()

let ControladorReservacion = new ControladorHabitacion()

rutas.post('/apijomar/v1/reservas/',ControladorReservacion.insertar)
rutas.get('/apijomar/v1/reservas/',ControladorReservacion.buscarTodos)
rutas.get('/apijomar/v1/reservas/:id/',ControladorReservacion.buscarPorId)
rutas.put('/apijomar/v1/reservas/:id/',ControladorReservacion.editar)
rutas.delete('/apijomar/v1/reservas/:id/',ControladorReservacion.eliminar)