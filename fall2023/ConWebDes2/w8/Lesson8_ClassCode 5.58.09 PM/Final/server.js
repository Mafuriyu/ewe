import express from "express";
const port = 3000;

const app = express();

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    let user1 = {
        firstName: "Jane",
        lastName: "Doe",
        birth: {
            day: 22,
            month: 1,
            year: 1999
        }
    };

    let user2 = {
        firstName: "Frank",
        lastName: "Doe",
        birth: {
            day: 22,
            month: 1,
            year: 1999
        }
    };

    let user3 = {
        firstName: "Billy",
        lastName: "Doe",
        birth: {
            day: 22,
            month: 1,
            year: 1999
        }
    };

    res.render('home', {
       users: [user1, user2, user3] 
    });
});

app.get('/about', async (req, res) => {
    res.render('about', {});
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});