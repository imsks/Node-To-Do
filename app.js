var express = require('express')
var app = express();

var PORT = 3000;

app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
    res.status(200).send('This is working')
})

app.get('/profile/:id', (req, res) => {
    res.status(200).send('This is working');
    console.log(req.params)
})


app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})