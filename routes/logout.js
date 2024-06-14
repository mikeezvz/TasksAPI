const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const router = express.Router();
router.use(express.json());

router.use(bodyParser.json()); 

router.delete('/', (request, response) => {
    if(request.session.authenticated){
    request.session.authenticated = false
    return response.status(200).send('Erfolgreich ausgeloggt');
    }
    return response.status(401).send('User ist nicht eingeloggt');
});

module.exports = router