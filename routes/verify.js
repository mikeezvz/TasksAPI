const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const router = express.Router();
router.use(express.json());

router.use(bodyParser.json()); 

router.get('/', (request, response) => {
    if (request.session.authenticated) {
        return response.status(200).send('User ist noch eingeloggt');
    }
    return response.status(401).send('User ist nicht eingeloggt');
});
    module.exports = router
