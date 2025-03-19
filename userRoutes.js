import { Router } from 'express'
import { registerValidationRules } from './validationRules.js'
import { handleValidationErrors } from './validationError.js'

const userRouter = Router()

// ruta de registro de usuarios con validación
userRouter.post('/register', registerValidationRules(), handleValidationErrors, (req, res) => {
  res.send('user registered succesfully')
})

// --> GET obtener todos los usuarios
userRouter.get('/', (req, res) => {
  res.send('lista de usuarios')
})

// --> GET obtener usuario por id
userRouter.get('/:id', (req, res) => {
  const { id } = req.params
  res.send(`información del usuario con id: ${id}`)
})

// --> POST crear un nuevo usuario
userRouter.post('/', (req, res) => {
  const nuevoUsuario = req.body
  res.send(`nuevo usuario creado con los datos ${JSON.stringify(nuevoUsuario)}`)
})

// --> PUT actualizar un usuario por id
userRouter.put('/:id', (req, res) => {
  const { id } = req.params
  const datosActualizados = req.body
  res.send(
    `usuario con id: ${id} ha sido actualizado con los datos ${JSON.stringify(datosActualizados)}`
  )
})

// --> DELETE borrar usuario por id
userRouter.delete('/:id', (req, res) => {
  const { id } = req.params
  res.send(`ùsuario con el id ${id} eliminado`)
})

export default userRouter
