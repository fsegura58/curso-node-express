const express = require('express')

const app = express()
const initDB = require('./config/db')
// const bodyParser = require('body-parser')
const port = 3001

const userRouters = require('./app/routes/user')
const itemsRouters = require('./app/routes/items')
const uploadRouters = require('./app/routes/upload')

// for parsing json
app.use(
    express.json({
        limit: '20mb'
    })
)
// app.use(
//     bodyParser.json({
//         limit: '20mb'
//     })
// )

// for parsing aplication/x-www-form-urlencoded
app.use(
    express.urlencoded({
        limit: '20mb',
        extended: true
    })
)
// app.use(
//     bodyParser.urlencoded({
//         limit: '20mb',
//         extended: true
//     })
// )

app.use(userRouters)
app.use(itemsRouters)
app.use(uploadRouters)

app.listen(port, () => {
    console.log('La aplicación está en línea!')
})

initDB()