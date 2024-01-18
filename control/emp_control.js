const emp_model = require('../model/emp_model');


module.exports = {


    get_evry_employee: async (request, response) => {


        try {

            const emps = await emp_model.find();


            response.status(200).json(emps);


        } 
        
        catch (er) {


            console.log(er);

            response.status(500).json({ er: 'error' });


        }


    },


    generate_employee: async (request, response) => {


        try {


            const { first_name, last_name, email, department, salary } = request.body;

            const emp = new emp_model({ first_name, last_name, email, department, salary });


            await emp.save();

            response.status(201).json({ msg: 'Employee generated successfully' });


        } 
        
        catch (er) {


            console.log(er);


            response.status(500).json({ er: 'error' });


        }


    },


    get_emp_id: async (request, response) => {


        try {


            const emp = await emp_model.findById(request.params.id);
            
            if (!emp) {


                return response.status(404).json({ er: 'employee not available' });


            }

            response.status(200).json(emp);


        } 
        
        catch (er) {


            console.log(er);


            response.status(500).json({ er: 'error' });


        }


    },


    chnge_emp_id: async (request, response) => {


        try {


            const { first_name, last_name, email, department, salary } = request.body;

            const chnge_emp = await emp_model.findByIdAndUpdate(request.params.id,{ first_name, last_name, email, department, salary },{ new: true });

            if (!chnge_emp) {


                return response.status(404).json({ er: 'Employee not available' });


            }

            response.status(200).json({ msg: 'Employee changed successfully' });


        } 
        
        catch (er) {


            console.log(er);


            response.status(500).json({ er: 'error' });


        }


    },


    del_emp_id: async (request, response) => {


        try {


            const del_emp = await emp_model.findByIdAndDelete(request.params.id);

            if (!del_emp) {


                return response.status(404).json({ er: 'Employee not available' });


            }

            response.status(200).json({ msg: 'Employee removed successfully' });


        } 
        
        catch (er) {


            console.log(er);


            response.status(500).json({ er: 'error' });


        }


    },
    
};