const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const router = express.router();

app.use(bodyParser.json()); 

app.get('/', (request, response) => {
    if (request.session.authenticated === true) {
        return response.status(200).json({ email: request.session.user.email });
    }
    return response.status(401).send('Not Authenticated');
});
