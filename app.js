const express = require('express');
const connect = require('./schemas')
const app = express();
const port = 3000;

connect();

const articleRouter = require('./routes/articles');


const requestMiddleware = (req, res, next) => {
    console.log("Request URL:", req.originalUrl, "-", new Date());
    next();
}


app.use(express.static('static'));
app.use(express.json());
app.use(express.urlencoded())

app.use(requestMiddleware);

app.use('/api', [articleRouter]);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(port, '포트로 연결!');
});