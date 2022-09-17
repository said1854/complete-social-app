import express from "express";
const app = express();
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT;
import conn from './model/db.js';
import pageRoute from './routes/pageRoute.js';

//connection to database
conn();

// Ejs template engine
app.set('view engine', 'ejs');

//Static files middleware
app.use(express.static('public'))

//Routes
app.use('/', pageRoute);

app.get('/services', (req, res) => {
    res.render('services');
})

app.listen(port, () => {
    console.log(`Server is running on port:${port}`)
})