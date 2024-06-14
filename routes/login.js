const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const router = express.router();


app.use(bodyParser.json()); 

app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true
  }));
  
  app.post('/', (request, response) => {
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
        return response.status(200).send('Sie sind eingeloogt');
    }

    return response.status(401).send('Ungültige E-Mail oder Passwort');
});