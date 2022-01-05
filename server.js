const express = require('express');
const bodyParser = require('body-parser');
const CORS = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(CORS());

const meets = [
    {
        id: 0,
        name: 'Cars and Coffee',
        location: '',
        time: '8:00AM',
        meetType: 'All Types',
        description: 'Wake up early and come to a car meet',
    },
    {
        id: 1,
        name: 'Street Car Takeover',
        location: '',
        time: '11:30PM',
        meetType: 'High Power Rolls after meeting spot',
        description: 'Less than 700hp might as well stay home',
    }
];

app.get('/api/meets', (req,res) => {
    res.status(200).json(movies.map(()))
})