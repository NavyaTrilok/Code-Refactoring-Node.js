//require express use or import express
const express = require('express');
const bodyParser = require('body-parser');
const { makeUpperCase, checkAdmin } = require('./middleware');
const { getSpecificStudent, getStudents, addStudent, updateStudent, deleteStudent } = require('./controllers/students');
const studentsRouter = require('./controllers/students');

const app = express();
app.use(bodyParser.json());


/*app.get('/students/:id', checkAdmin, getSpecificStudent);

app.get('/students', getStudents);

app.post('/students', addStudent);

app.put('/students/:id', updateStudent);

app.delete('/students/:id', checkAdmin, deleteStudent);*/

app.use('/students', studentsRouter);

app.use(makeUpperCase);

app.use('/', function(req, res, next){
    console.log('Request url:' + req.url);
    res.send('Hello');
})
app.listen(3000,() => {
    console.log('Server is running on port 3000');
});