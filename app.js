import express from "express";
const app = express();
const port = 1854;

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