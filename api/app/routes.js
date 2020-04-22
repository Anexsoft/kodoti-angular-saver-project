const outcomeService = require('./services/OutcomeService'),
    identityService = require('./services/IdentityService'),
    auth = require('./middlewares/auth');

module.exports = function (app) {
    // default route
    app.get('/', (req, res) => res.send('Running ...'));

    // authenticate
    app.post('/sign-in', (req, res) => {
        let email = req.body.email,
            password = req.body.password;

        let result = identityService.authenticate(email, password);

        if (result) {
            res.status(200).json(result);
        } else {
            res.status(400).send('Access denied');
        }
    });

    // outcomes
    app.get('/outcomes', auth, (req, res) => {
        let year = req.query.year || null;
        let month = req.query.month || null;
        let userId = req.query.userId || null;

        if (!year || !month || !userId) {
            res.status(400).send('Invalid parameters.');
            return;
        }

        res.json(outcomeService.getAll(userId, year, month));
    });

    app.get('/outcomes/:id', (req, res) => {
        res.json(outcomeService.find(req.params.id));
    });

    app.post('/outcomes', (req, res) => {
        res.status(201).json(outcomeService.create(req.body));
    });

    app.put('/outcomes/:id', (req, res) => {
        outcomeService.update(req.params.id, req.body)
        res.status(204).send();
    });

    app.delete('/outcomes/:id', (req, res) => {
        outcomeService.remove(req.params.id)
        res.status(204).send();
    });
};