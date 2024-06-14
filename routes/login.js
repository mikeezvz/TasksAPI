const express = require('express');
const router = express.Router();

router.use(express.json());

router.post('/', (request, response) => {
    const user = {
        email: "mike.zogheib@lernende.bbw.ch",
        password: "1212"
    };

    const { email, password } = request.body;

    if (!email || !password) {
        return response.status(400).send('Email und Passwort werden benötigt');
    }

    if (email === user.email, password === user.password) {
        request.session.authenticated = true;
        request.session.user = { email };
        return response.status(200).send('Sie sind eingeloggt');
    }

    return response.status(401).send('Ungültige E-Mail oder Passwort');
});

module.exports = router;
