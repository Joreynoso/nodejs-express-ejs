import { Router } from 'express'

const userRouter2 = Router()

const users = [
  { id: 1, name: 'José', age: 34 },
  { id: 2, name: 'Belen', age: 27 },
  { id: 3, name: 'Nacho', age: 70 },
]

// ruta para listar los usuarios
userRouter2.get('/', (req, res) => {
  res.render('users', { users })
})

// ruta para mostrar un perfil de usuario especifico
userRouter2.get('/:id', (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id))
  if (!user) {
    res.status(404).send('user not found')
  } else {
    res.render('userProfile', { user })
  }
})

// exportar ruta
export default userRouter2
