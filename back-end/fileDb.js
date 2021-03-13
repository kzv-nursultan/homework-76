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
        item.id = nanoid();
        item.date = new Date();
        console.log(item);
        data.push(item);
    },
    save() {
        fs.writeFileSync(filename, JSON.stringify(data));
    }
};