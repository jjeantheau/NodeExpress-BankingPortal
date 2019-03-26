const fs = require('fs');
const path = require('path');

const express = require('express');

const app = new express();

var fileContent = fs.readFileSync("src/json/accounts.json");
accounts = JSON.parse(fileContent);

console.log(accounts);

app.set('views',path.join('./src', '/views'));
app.set('view engine','ejs');

app.use(express.static(path.join('./src', '/public')));

app.get('/', (req, res) => res.render('index', { title: 'Account Summary'}));


app.listen(3000, () => { console.log('PS Project Running on port 3000!') });
