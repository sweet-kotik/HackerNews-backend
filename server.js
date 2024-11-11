const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors())
app.use(express.static(
    path.join(__dirname, 'build')
))
let id = 0;
const port = 3000;

app.get('/', (req, res) => {
    if (req.headers['hx-request']) {
        res.send('<div id="newsList"></div>')
    } else {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    }
    
});

app.get('/id', (_, res) => {
    res.json({ id: id});
});

app.use('/update', function(req, res) {
    id = req.query.id;
    res.send(`<div id="newsPage"></div>`)
});

app.listen(port, function() {
    console.log(`Server is running on port ${port}`);
});
