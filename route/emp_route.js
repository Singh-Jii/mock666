const exp = require('express');


const emp_control = require('../control/emp_control');

const route = exp.Router();


route.get('/employees', emp_control.get_evry_employee);

route.post('/employees', emp_control.generate_employee);


route.get('/employees/:id', emp_control.get_emp_id);

route.put('/employees/:id', emp_control.chnge_emp_id);



route.delete('/employees/:id', emp_control.del_emp_id);


module.exports = route;