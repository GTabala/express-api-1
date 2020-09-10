const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')

const cors = require('cors')

const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())


// GET localhost:3000/hello

// Endpoints
app.get('/user', (req, res) => {
  console.log('URL >>>>', req.url)


  res.send({
      username: "Rody",
      age: 36,
      occupation: 'developer'
  })
})

app.post('/user', (req, res) => {

    const newUser = JSON.stringify(req.body)

    fs.writeFileSync('user.json', newUser)

    res.status(200).send({
        message: 'success'
    })

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})