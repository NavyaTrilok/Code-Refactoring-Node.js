const express = require('express');
const studentsRouter = express.Router();

const students = [];

studentsRouter.get('/:id', (req, res) => {
    const id = req.params.id;
    const currentStudent = students[id];

    if (currentStudent === undefined) {
        res.status(404).send(`Student with ID ${id} not found`);
    } else {
        res.json(currentStudent); // Return the student data as JSON
        
    }
});

studentsRouter.get('/', (req, res) => {
    res.json(students); // Return the list of students as JSON
});

// POST /students - Add a new student
studentsRouter.post('/', (req, res) => {
    const student = req.body;
    students.push(student);
    //res.status(201).json(student); // Return the added student as JSON
    res.send(`Student with the name ${student.fname} ${student.mname}, ${student.lname} added to the database`);
});

studentsRouter.put('/:id', (req, res) => {
    const id = req.params.id;
    const updatedStudent = req.body;

    if (students[id] === undefined) {
        res.status(404).send(`Student with ID ${id} not found`);
    } else {
        students[id] = updatedStudent;
        //res.json(updatedStudent); // Return the updated student as JSON
        res.send(`Student with the id ${id} has been updated`);
    }
});

studentsRouter.delete('/:id', (req, res) => {
    const id = req.params.id;

    if (students[id] === undefined) {
        res.status(404).send(`Student with ID ${id} not found`);
    } else {
        students.splice(id, 1);
        //res.sendStatus(204); // No content, successful deletion
        res.send(`Student with the id ${id} has been deleted`);
    }
});
/*const getSpecificStudent = (req, res) => {
    const id = req.params.id;

    const currentStudent = students[id];

    if(currentStudent == undefined){
        res.send(`Student with the ${id} is not found`);
    }

    res.send(`Student with the ${id} is ${currentStudent.fname} ${currentStudent.mname} ${currentStudent.lname}`);
}

const getStudents = (req,res) => {
    console.log("here");
    res.send(students);
}


const addStudent = (req,res) => {
    const student = req.body;
    students.push(student);
    res.send(`Student with the name ${student.fname} ${student.mname}, ${student.lname} added to the database`);
}


const updateStudent = (req,res) => {
    const id = req.params.id;
    const student = req.body;
    students[id] = student;
    res.send(`Student with the id ${id} has been updated`);
}


const deleteStudent = (req,res) => {
    const id = req.params.id;
    const student = students[id];
    students.splice(id,1);
    res.send(`Student with the id ${id} has been deleted`);
}*/

// studentsRouter.get('/students/:id', getSpecificStudent);
// studentsRouter.get('/students', getStudents);
// studentsRouter.post('/students', addStudent);
// studentsRouter.put('/students/:id', updateStudent);
// studentsRouter.delete('/students/:id', deleteStudent);

/*module.exports = {
    getSpecificStudent,
    getStudents,
    addStudent,
    updateStudent,
    deleteStudent
}*/

module.exports = studentsRouter;

/*app.get('/students/:id', checkAdmin, getSpecificStudent);

app.get('/students', getStudents);

app.post('/students', addStudent);

app.put('/students/:id', updateStudent);

app.delete('/students/:id', checkAdmin, deleteStudent);*/