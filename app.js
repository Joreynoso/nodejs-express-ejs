// import expres js
import express from 'express'
import userRouter from './userRoutes.js'
import userRouter2 from './userRouter2.js'

const port = process.env.PORT || 3000

const app = express()

// set EJS view
app.set('view engine', 'ejs')

// use middleware json
app.use(express.json())

// --> EJS definir una ruta para testear 
app.get('/greeting', (req, res) => {
  const name = 'Flavio Briatore'
  res.render('greeting', { name })
})

// --> EJS definir ruta para los usuarios
app.use('/users', userRouter2)

// --> EJS definir ruta con array de productos
app.get('/products', (req, res) => {
  const products = [
    { name: 'laptop', price: 1500 },
    { name: 'smartphone', price: 500 },
    { name: 'tablet', price: 300 },
  ]
  res.render('products', { products })
})

// middleware global para registrar solicitudes
const loggerMiddleware = (req, res, next) => {
  console.log(`request received ${req.method} ${req.url}`)
  next() // --> pasa el control al siguiente mdw
}

// import userRouter
app.use('/usuarios', userRouter)

// use loggerMiddleware
app.use(loggerMiddleware)

// listen server
app.listen(port, () => {
  console.log(`escuchando http://localhost:${port}`)
})
