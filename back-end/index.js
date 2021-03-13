const express = require('express');
const app = express();
const cors = require('cors');
const fileDb = require('./fileDb');
const messages = require('./app/message');

app.use(express.json());
app.use(cors());

fileDb.init();

const port = 8000;

app.use('/messages', messages);

app.listen(port,()=>{
    console.log('server started on '+ port);
});