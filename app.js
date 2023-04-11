const express = require("express");

const nodejs_tutorial_app = express()

object = {key, names, age, sex}

nodejs_tutorial_app.get('/:object', function(req, res){
    return response.send(`${req.params.object}`)
});

//4 
nodejs_tutorial_app.get('/:object', function(req, res){
    res.json({ sex : "female" })
});
nodejs_tutorial_app.listen(5000, function(){
    console.log('Server running on port 5000')
})