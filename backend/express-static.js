const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const routes = require('./routes/routes');

app.use(express.json());
app.use('/', express.static(__dirname + "/static"), bodyParser.json())
app.use('/posts', routes);

app.listen(4000, () => {
    console.log('server listen on http://localhost:4000')
});