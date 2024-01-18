module.exports = (er, reuestq, response, next) => {

    console.log(er.stack);

    if (er.name === 'validatio_error') {


        response.status(400).json({ er: 'Validation Error', msg: er.msg });


    } 
    
    else {


        response.status(500).json({ er: 'error' });


    }

    
};
