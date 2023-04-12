//1,2

const express = require("express");

const nodejs_tutorial_app = express()


//3
const keys = [
    {
        name: 'Ade',
        age: 10,
        sex: 'f'
    }]

nodejs_tutorial_app.get('/:keys', function(req, res){
    return res.send(`${req.params.keys}`)
});

//4 
nodejs_tutorial_app.get('/:object', function(req, res){
    res.json({ sex : "female" })
});
nodejs_tutorial_app.listen(5000, function(){
    console.log('Server running on port 5000')
})