import express from "express";
const app = express();
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT;
import conn from './model/db.js';

//connection to database
conn();

// Ejs template engine
app.set('view engine', 'ejs');

//Static files middleware
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index');
})
app.get('/about', (req, res) => {
    res.render('about');
})
app.get('/services', (req, res) => {
    res.render('services');
})

app.listen(port, () => {
    console.log(`Server is running on port:${port}`)
})