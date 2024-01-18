const mongo = require('mongoose');


mongo.connect(process.env.mongo_link, { 
    
    
    useNewUrlParser: true, 
    
    
    useUnifiedTopology: true 


})


    .then(() => console.log('database connected'))


    .catch(er => console.error(er));