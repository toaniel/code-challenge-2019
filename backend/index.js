const express = require('express')
const app = express()
const port = 3002
const cors = require('cors')

app.use (cors())
app.get('/', (req, res) => res.send('Hello World!'))


app.get('/distances', function(req, res) {
 const data = [
	  {
		"distance": 50,
		"date": "2019-01-01T23:00:00.000Z"
	  },
	  {
		"distance": 55,
		"date": "2019-01-02T23:00:00.000Z"
	  },
	  {
		"distance": 40,
		"date": "2019-01-03T23:00:00.000Z"
	  },
	  {
		"distance": 60,
		"date": "2019-01-04T23:00:00.000Z"
	  }
	];
  res.send(data);
  });
 
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
