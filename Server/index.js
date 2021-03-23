require('dotenv').config()

const express = require('express')
const massive = require('massive')
const ctrl = require('./products_controller')


const app = express()

const { SERVER_PORT, CONNECTION_STRING } = process.env



app.listen(SERVER_PORT, () => {
    console.log(`Server is running on port ${SERVER_PORT}`)
})

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
})
    .then(dbInstance => {
        app.set('db', dbInstance)
    })
    .catch(err => console.log(err))


app.get('/api/products', ctrl.getAll)
app.get('/api/products/:id', ctrl.getOne)
app.put('/api/products/:id', ctrl.update)
app.post('/api/products/:id', ctrl.create)
app.delete('/api/products/:id', ctrl.delete)

app.use(express.json())