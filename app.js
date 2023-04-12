const express = require("express");

const nodejs_tutorial_app = express()

const users = {
        names: 'Ade',
        age: 10,
        sex: 'f'
    }

nodejs_tutorial_app.get('/:user', function(req, res){
    req.params.user
    if(!user) return res.send({
        status: 'failed',
        message: 'User not found',
    })


    const user = users.find(user => user.names == names)// using a name patam

    if(!user) return res.send({
        status: 'failed',
        message: 'User not found'
    })

    return res.send({
        status: 'Succes',
        message: 'User found'
    });
});

//4 
nodejs_tutorial_app.get('/:user', function(req, res){
    res.json({ sex : "female" })
});
nodejs_tutorial_app.listen(5000, function(){
    console.log('Server running on port 5000')
})