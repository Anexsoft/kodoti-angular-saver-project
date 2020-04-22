const dotenv = require('dotenv'),
    express = require('express'),
    cors = require('cors'),
    routes = require('./app/routes');

// read from .env
dotenv.config();

// start express
let app = express();

// enable cors
app.use(cors());

// add json
app.use(express.json());

// add routes
routes(app);

app.listen(process.env.PORT, () => {
    console.log('Running on port:' + process.env.PORT);
});