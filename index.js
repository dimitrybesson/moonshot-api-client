const express = require('express')
const langController = require('./controllers/langController')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => res.send('Welcome to the root route'))

app.use('/api/v1', langController)

app.listen(port, () => console.log(`Server is listening on port ${port}`))