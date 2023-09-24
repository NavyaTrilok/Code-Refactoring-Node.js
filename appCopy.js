//require express use or import express
const express = require('express');
const app = express();


const welcomeMiddleware = (req, res) =>{
    console.log('Welcome to my website');
    if(req.welcome == undefined){
        req.welcome = 'welcome to my website';
    }
    next();
}

const checkAdmin = (req, res, next) => {
    if(req.query.admin === 'true'){
        next();
    }else{
        var message = req.message + 'You are not an admin';
        req.isAdmin = false;
        //res.status(400).send('should be admin');
        next();
    }
}
app.use(welcomeMiddleware);

app.get('/',(req,res) => {
    res.send('Hello World');
});

app.listen(3000,() => {
    console.log('Server is running on port 3000');
});