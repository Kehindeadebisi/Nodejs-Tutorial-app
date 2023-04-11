//1,2

const express = require("express");

const nodejs_tutorial_app = express()


//3

nodejs_tutorial_app.get('/:key', function(req, res){
    return response.send(`${req.params.key}`)
});

nodejs_tutorial_app.get('/:name', function(req, res){
    return response.send(`${req.params.name}`)
});

nodejs_tutorial_app.get('/:age', function(req, res){
    return response.send(`${req.params.age}`)
});

nodejs_tutorial_app.get('/:sex', function(req, res){
    return response.send(`${req.params.sex}`)
});

//4 
nodejs_tutorial_app.get('/:object', function(req, res){
    res.json({ sex : "female" })
});
nodejs_tutorial_app.listen(5000, function(){
    console.log('Server running on port 5000')
})