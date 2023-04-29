const express = require('express');
var cors = require('cors')

const app = express();
const port = process.env.PORT || 5000;

const categoris = require('./data/categoris.json')

app.use(cors())



app.get('/', (req, res) =>{
    res.send('Dragon is running')
});

app.get('/categoris', (req, res) => {
    res.send(categoris)
})



app.listen(port, () =>{
    console.log(`Dragon API is running on port: ${port}`)
})