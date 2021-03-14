const express = require('express');
const fileDb = require('../fileDb');
const router = express.Router();

router.get('/', (req,res)=>{
    const datetime = req.query.datetime;
    const date = new Date(datetime);
    if(datetime) {

        if(isNaN(date.getDate())) {
            res.send('you inputted wrong date');
        } else {
            const data = fileDb.getItems();
            const now = new Date().toISOString();
            const arrayOfDates = [];
            data.map(object=>{
                if(object.date>datetime) {
                    arrayOfDates.push(object);
                }
            }
            );
            res.send(arrayOfDates);
        }

    } else {

        const data = fileDb.getItems();
        res.send(data);

    };
});


router.post('/', (req,res)=>{
    if (req.body.author && req.body.message){
        fileDb.addItem(req.body);
        res.send(req.body);
    } else {
        res.status(400).send("Something went wrong");
    }
});

module.exports = router;