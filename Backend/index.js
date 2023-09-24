const ConnectTomongo = require('./db');
const express = require('express')
const app = express()
const port = 4000
var cors = require('cors') // 

 
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: false}))

// Available routes

app.use('/api/auth', require('./Routes/authentication'));
app.use('/api/book', require('./Routes/Booklist'));



app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

ConnectTomongo();
