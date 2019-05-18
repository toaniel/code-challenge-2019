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


app.get('/velocity', function(req, res) {
 const data = [
	  {
		"velocity": 5.0,
		"date": "2019-01-01T23:00:00.000Z"
	  },
	  {
		"velocity": 5.5,
		"date": "2019-01-02T23:00:00.000Z"
	  },
	  {
		"velocity": 4.0,
		"date": "2019-01-03T23:00:00.000Z"
	  },
	  {
		"velocity": 6.0,
		"date": "2019-01-04T23:00:00.000Z"
	  }
	];
  res.send(data);
  });

app.get('/tracks', function(req, res) {
 const data = [
	  {
		"id": 1,
		"name": "Running around La Carolina",
		"distance": 2000,
		"time": 3600,
		"date": "2019-01-01T23:00:00.000Z"
	  },
	  {
		"id": 2,
		"name": "Running around La Alameda",
		"distance": 1000,
		"time": 1800,
		"date": "2019-01-03T23:00:00.000Z"
	  },
	  {
		"id": 3,
		"name": "Running around Parque Metropolitano",
		"distance": 3000,
		"time": 4800,
		"date": "2019-01-04T23:00:00.000Z"
	  }
	];
  res.send(data);
  });
  
app.get('/track/:id', function(req, res) {
 const id = req.params.id;
 const data = {
  "id": 1,
  "name": "Running around La Carolina",
  "distance": 2000,
  "velocity": 0.5,
  "time": 60,
  "date": "2019-01-04T23:00:00.000Z",
  "points": [
    {
      "lat": -0.1821626,
      "long": -78.4857697
    }, {
      "lat": -0.1834496,
      "long": -78.4875187
    }, {
      "lat": -0.1817756,
      "long": -78.4869717
    }
  ]
}
;
  res.send(data);
  });
 
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
