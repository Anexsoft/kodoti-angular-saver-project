const db = require('../db/database');

function makeid(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;

    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    
    return result;
}

class IdentityService {
    authenticate(email, password) {
        let entry = db.users.find(
            x => x.email == email && x.password == password
        );

        if (entry) {
            entry.token = makeid(100);

            return {
                access_token: entry.token,
                user: {
                    id: entry.id,
                    name: entry.name,
                    email: entry.email
                }
            };
        }

        return entry;
    }
}

module.exports = new IdentityService();