const mongo = require('mongoose');

const emp_schema = new mongo.Schema({


    first_name: { 
        
        type: String, 
        
        required: true 
    
    },


    last_name: { 
        
        type: String, 
        
        required: true 
    
    },


    email: { 
        
        type: String, 
        
        required: true, 
        
        
        unique: true 
    
    },


    department: { 
        
        type: String, 
        
        enum: ['Tech', 'Marketing', 'Operations'], 
        
        required: true 
    
    },


    salary: { 
        
        type: Number, 
        
        required: true 
    
    },


});


const emp_model = mongo.model('Employee', emp_schema);


module.exports = emp_model;