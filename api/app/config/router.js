let identityRouter = require('../routes/identity'),
    outcomeRouter = require('../routes/outcomes');

module.exports = (app) => {
    app.get('/', (req, res) => res.send('Running ...'));
    identityRouter(app);
    outcomeRouter(app);
};