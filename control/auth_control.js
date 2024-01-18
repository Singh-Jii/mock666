const bc = require('bcrypt');

const jot = require('jsonwebtoken');


const client_model = require('../model/client_model');

module.exports = {


    signup_form: async (request, response) => {

        try {


            const { email, password } = request.body;

            const hash_pswrd = await bc.hash(password, 12);

            const client = new client_model({ email, password: hash_pswrd });


            await client.save();

            response.status(201).json({ msg: 'Client registration is completed' });


        } 
        
        catch (er) {


            console.log(er);

            response.status(500).json({ er: 'error' });


        }


    },


    login_form: async (request, response) => {


        try {


            const { email, password } = request.body;

            const client = await client_model.findOne({ email });

            if (!client || !await bc.compare(password, client.password)) {


                return response.status(401).json({ er: 'wrong information' });


            }

            const token = jot.sign({ client_id: client._id }, process.env.jwt_secret, { expiresIn: '2h' });


            response.status(200).json({ token });


        } 
        
        catch (er) {


            console.log(er);


            response.status(500).json({ er: 'error' });


        }


    },

    
};