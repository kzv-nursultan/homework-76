const fs = require('fs');
const {nanoid} = require('nanoid');

const filename = './db.json';

let data = [];

module.exports = {
    init() {
        try {
            const fileData = fs.readFile(filename);
            data = JSON.parse(fileData);
        } catch {
            data = [];
        }
    },

    getItems() {
        return data;
    },

    addItem(item) {
        console.log(item);
        data.push(item);
        this.save();
    },
    save() {
        fs.writeFileSync(filename, JSON.stringify(data));
    }
};