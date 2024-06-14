const express = require('express');
const app = express();
const port = 3000;
const session = require('express-session');
const bodyParser = require('body-parser');
const swaggerJsdoc = require("swagger-jsdoc")
//const swaggerUi = require('swagger-ui-express');
//const swaggerDocument = require('./swagger.json');

//router.use('/api-docs', swaggerUi.serve);
//router.get('/api-docs', swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

const tasksRoute = require('./routes/tasks')
app.use('/tasks', tasksRoute)

const loginRoute = require('./routes/login')
app.use('/login', loginRoute)

const verifyRoute = require('./routes/verify')
app.use('/verify', verifyRoute)
