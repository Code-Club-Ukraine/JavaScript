const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const filmsList = [
    {
        name: "Як приборкати дракона",
        year: 2010,
        score: 8.1,
    },
    {
        name: "Гаррі Поттер і філософський камінь",
        year: 2002,
        score: 7.6,
    },
    {
        name: "Кролик Петрик",
        year: 2018,
        score: 6.6,
    },
    {
        name: "Панда Кунг-Фу 2",
        year: 2011,
        score: 7.2,
    },
    {
        name: "Мандрівний замок Хаула",
        year: 2004,
        score: 8.2,
    },
    {
        name: "Чарлі і шоколадна фабрика",
        year: 2005,
        score: 6.6,
    },
    {
        name: "Сам удома",
        year: 1990,
        score: 7.6,
    },
    {
        name: "Хроніки Нарнії: Лев, чаклунка та шафа",
        year: 2005,
        score: 6.9,
    },
    {
        name: "Хранитель часу",
        year: 2011,
        score: 7.5,
    },
    {
        name: "Паддінгтон",
        year: 2014,
        score: 7.2,
    },
    {
        name: "Дамбо",
        year: 2019,
        score: 6.3,
    },
    {
        name: "12 подвигів Астерікса",
        year: 1976,
        score: 7.7,
    },
    {
        name: "Льодовиковий період",
        year: 2002,
        score: 7.5,
    },
    {
        name: "Історія іграшок",
        year: 1995,
        score: 8.3,
    },
    {
        name: "Шрек",
        year: 2001,
        score: 7.8,
    },
];

let userFilms = [];

app.get('/api/films', (req, res) => {
    const allFilms = [...filmsList, ...userFilms];
    
    res.json({
        data: allFilms,
        total: allFilms.length
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
    console.log(`📋 Films API: http://localhost:${PORT}/api/films`);
});

