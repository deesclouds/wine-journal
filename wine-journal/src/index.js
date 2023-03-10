const express = require('express')

// hooking up our router
// const v1Router = require('./v1/routes')

const v1WineRouter = require('./v1/routes/wineRoutes')
const app = express()
const PORT = process.env.PORT || 3000

// For testing purposes:
// app.get('/', (req, res) => {
//     res.send("<h2>It's Working</h2>")
// })

// app.use('/api/v1', v1Router)
app.use('/api/v1/wines', v1WineRouter)

app.listen(PORT, () => {
    console.log(`API is listening on ${PORT}`)
})