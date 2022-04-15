const PORT = 8000
const axios = require('axios').default
const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
require('dotenv').config()
app.use(express.json())

app.post('/solve', (req, res) => {
  console.log(req.body)
const options = {
  method: 'POST',
  url: 'https://solve-sudoku.p.rapidapi.com/',
  headers: {
    'content-type': 'application/json',
    'x-rapidapi-host': 'solve-sudoku.p.rapidapi.com',
   'x-rapidapi-key': process.env.RAPID_API_KEY,
  },
  data: {
    puzzle: req.body.numbers
  }
};

axios.request(options).then((response) => {
  console.log(response.data)
  res.json(response.data)
}).catch((error) => {
	console.error(error)
})
})


app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))




