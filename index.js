const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const coursesDetails = require('./data/coursesDetails.json');

app.get('/', (req, res) => {
    res.send('API Running');
});

app.get('/category', (req, res) => {
    res.send(categories)
});

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === "01") {
        // console.log(id)
        res.send(coursesDetails)
    }
    else {
        const category_course = coursesDetails.filter(c => c.category_id === id);
        res.send(category_course);
    }

})
app.get('/courses', (req, res) => {
    res.send(coursesDetails);
});

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    if (id === "01") {
        // console.log(id)
        res.send(coursesDetails)
    }
    else {
        const selectedCourses = coursesDetails.find(c => c.id === id);
        res.send(selectedCourses);
    }
});

app.listen(port, () => {
    console.log('Courses Api Running', port);
})
