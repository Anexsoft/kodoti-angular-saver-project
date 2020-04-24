const dotenv = require('dotenv'),
    express = require('express'),
    cors = require('cors'),
    router = require('./app/config/router'),
    swagger = require('./app/config/swagger');

// read from .env
dotenv.config();

// start express
let app = express();

// enable cors
app.use(cors());

// add json
app.use(express.json());

// add swagger
swagger(app);

// add routes
router(app);

app.listen(process.env.PORT, () => {
    console.log('Running on port:' + process.env.PORT);
});