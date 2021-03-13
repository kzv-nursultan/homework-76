const express = require('express');
const fileDb = require('../fileDb');
const router = express.Router();

router.get('/', (req,res)=>{
    const datetime = req.query.datetime;
    if(datetime) {
        res.send('you inputted ' + datetime);
    };
    
    const data = fileDb.getItems();
    res.send(data);
});


router.post('/', (req,res)=>{
    res.send(req.body);
    fileDb.addItem(req.body);
});

module.exports = router;