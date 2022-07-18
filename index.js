const { whatsapp_altaqwaa } = require('./whatsapp_altaqwaa.js');
const Error = require('./lib/error.js');
const db = require('./lib/db.js');

db();

whatsapp_altaqwaa().catch(error => {

    Error(error)

    if (error.toString() === 'Error: Connection Closed') {

        whatsapp_altaqwaa()

    }
});