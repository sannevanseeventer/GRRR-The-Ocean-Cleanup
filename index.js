import { log } from 'console'
import express from 'express'
import fetch from 'node-fetch'

// Maak een nieuwe express app
const app = express()

// Stel in hoe we express gebruiken
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('public'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connectionJson = "https://s3.eu-west-1.amazonaws.com/data.theoceancleanup.com/systems-dashboard/realtime-data-river.json"

// Maak een route voor de index
app.get('/', (request, response) => {
  fetchJson(connectionJson).then((data) => {
    console.log(data)
    response.render('index', { data: data })
  })
})

// Stel het poortnummer in en start express
app.set('port', process.env.PORT || 8000)
app.listen(app.get('port'), function () {
  console.log(`Application started on http://localhost:${app.get('port')}`)
})

/**
 * Wraps the fetch api and returns the response body parsed through json
 * @param {*} url the api endpoint to address
 * @returns the json response from the api endpoint
 */

async function fetchJson(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}