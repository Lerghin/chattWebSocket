const express= require('express');
const path= require('path');
const app = express();
const {websocket} = require('ws');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
  });

const EXPRESS_PORT = 3000;

app.listen(EXPRESS_PORT, () => {
    console.log(`Server is running on port ${EXPRESS_PORT}`);
});