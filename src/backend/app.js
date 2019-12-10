const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3001;
const Axios = require('axios');
const Data = [];
app.use(express.json());

app.use(express.static(path.join(__dirname, '../../build')));

app.get('/rest/competitions', (req, res) => {
  Axios.get('http://api.football-data.org/v2/competitions/2021/matches', {
    headers: { 'X-Auth-Token': '0154c5dc13514833a457779bbaafdd13', 'Content-Type': 'application/json' },
  }).then(response => {
    res.send(response.data)
  })
});
app.listen(port, () => console.log(`${port}`));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});