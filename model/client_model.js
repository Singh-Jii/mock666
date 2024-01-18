const mongo = require('mongoose');

const client_schema = new mongo.Schema({


    email: { 
        
        type: String, 
        
        required: true, 
        
        
        unique: true 
    
    },


    password: { 
        
        type: String, 
        
        required: true 
    
    },


});


const client_model = mongo.model('User', client_schema);


module.exports = client_model;