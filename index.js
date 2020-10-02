const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 5000

app.use('/static', express.static(path.join(__dirname, 'client')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', '/index.html'))
})

app.listen(port, () => {
  console.log(`server started on port ${port}`)
})
