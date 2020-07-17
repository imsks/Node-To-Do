var bodyParser = require('body-parser');

var data = [
    {
        item: "get Milk"
    },
    {
        item: "Walk Dog"
    },
]

var urlEncodedParser = bodyParser.urlencoded({ extended: false })


module.exports = (app) => {
    app.get('/todo', (req, res) => {
        res.render('todo', { todos: data });
    });

    app.post('/todo', urlEncodedParser, (req, res) => {
        console.log(req.body)
        data.push(req.body);
        req.json();
    });

    app.delete('/todo/:item', (req, res) => {
        console.log('s')
    });
}