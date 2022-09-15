import express from "express";
const app = express();

const port = 1854;

app.get('/', (req, res) => {
    res.send("Index Page")
})


app.listen(port, () => {
    console.log(`Server is running on port:${port}`)
})