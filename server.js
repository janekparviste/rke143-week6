const express = require('express');
const booksRouter = require('./routes/books');
const countriesRouter = require('./routes/countries');
const port = 3000;

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    //res.send('<h1>Hello from app get /</h1>')
    //res.sendStatus(500);
    // res.status(500).json({message:"Internal error. Try again later."})
    //res.download('server.js')
    res.render('index');
});

app.use('/books', booksRouter);
app.use('/countries', countriesRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
