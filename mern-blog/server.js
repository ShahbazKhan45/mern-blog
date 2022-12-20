// Create Server
var express = require('express');
// var bodyParser = require('body-parser');
var app = express();
var port = process.env.port || 8000;

const articlesInfo = {
    "learn-react": {
        comments: [],
    },
    "learn-node": {
        comments: [],
    },
    "my-thoughts-on-learning-react": {
        comments: [],
    }

}


////////Initialize the middleware
////////Response in json formate
// app.use(bodyParser.json());
app.use(express.json({ extended: false }));

////////Checking the route
// app.post('/', (req, res) => res.send(`Hi! ${req.body.name}`))
// app.get('/hi/:name', (req, res) => res.send(`Hi, ${req.params.name}`))

//////// Route for comments
app.post('/api/articles/:name/add-comments', (req, res)=>{
    const {username, text} = req.body;
    const articleName = req.params.name;
    articlesInfo[articleName].comments.push({username, text});
    res.status(200).send(articlesInfo[articleName])
})






app.listen(port, () => console.log(`Server Started at Port ${port}`));