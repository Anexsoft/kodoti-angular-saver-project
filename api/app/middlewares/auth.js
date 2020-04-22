const db = require('../db/database');

module.exports = (req, res, next) => {
    let authorization = req.headers.authorization || null;

    if(authorization) {
        if(db.users.find(x => x.token === authorization)) {
            next();
            return;
        }
    }

    res.status(401).send('Unauthorized');
};