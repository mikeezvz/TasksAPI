const express = require('express');
const app = express();
const port = 3004;
const session = require('express-session');
const bodyParser = require('body-parser');

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

const userRoute = require('')