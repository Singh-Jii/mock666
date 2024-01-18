const exp = require('express');

const cr = require('cors');

const bp = require('body-parser');

const mongo = require('mongoose');


const auth_route = require('./route/auth_route');

const emp_route = require('./route/emp_route');


const err_hndle = require('./err_hndle');

const env = require('dotenv');

env.config();

const application = exp();


const my_port = process.env.my_port || 8000;

application.use(cr());


application.use(bp.json());

mongo.connect(process.env.mongo_link, { 
    
    useNewUrlParser: true, 
    
    useUnifiedTopology: true 


});

application.use('/api/auth', auth_route);


application.use('/api', emp_route);

application.use(err_hndle);

application.listen(my_port, () => {


    console.log(`${my_port}`);

    
});