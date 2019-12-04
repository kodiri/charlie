const express = require('express');
const app = express();
const port = 3001;
const Axios = require('axios');
app.use(express.json());

app.get('/', (req, res) => res.send('Hello Charlie Team'));
app.listen(port, () => console.log(`${port}`));

// try {

// }

app.get('/matches', async (req, res) => {
    try {
        const matches = await Axios.get('http://api.football-data.org/v2/competitions/', {
        headers: { 'X-Auth-Token': '0154c5dc13514833a457779bbaafdd13', 'Content-Type': 'application/json' },
        }).then(response => res.json(response.data))
        console.log(matches);
        res.send([matches]);
    }
    catch(e) {
        new Error(e)
    }
})