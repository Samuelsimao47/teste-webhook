/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.  
 * @param {!express:Response} res HTTP response context.
 */

exports.aloha = (req, res) => {

    const axios = require('axios').default
    const colors = require('colors')

    console.log('cheguei aqui');

    // res.status(200).send(`O grêmio NÃO vai ser rebaixado`);
    

    // ------------------------------------------------------------------------


    const strId = 'nada'
    const url = "https://builder.knack.com/samuel/primeiro-teste/schema/list/objects/object_1/fields"
    const authHeaders = {
        headers: {
            'X-Knack-Application-Id': "618bac31c8cfc8001e2d489d",
            'X-Knack-REST-API-KEY': "82edf690-a9d7-498e-b6e7-7e263a1391d0",
            'Content-Type': 'application/json'
        },
    }

    let body = {
        field_1: 'Novo Hamburgo'
    }

    await axios.post(url, body, authHeaders)
        .then(function (response) {
            idRowCreated = response.data.id
            if (logRetorno) { console.log("POST: " + logRetorno.green); }
        })
        .catch(function (error) {
            console.log("error posting - ".red + logRetorno);
            hasError = true
        })

};
