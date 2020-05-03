const LoremIpsum = require("lorem-ipsum").LoremIpsum;
const { v4: uuidv4 } = require('uuid');

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
});

let database = {
    users: [
        { id: "ec954c0f-d9aa-4d4f-b90c-65d44ea52423", email: "admin@kodoti.com", name: "Eduardo", password: "123456", "token": null },
        { id: "4524edee-01ce-4ac7-8c4e-b43ba361d985", email: "test@kodoti.com", name: "Juancho", password: "123456", "token": null }
    ],
    outcomes: []
};

seeder(database);

function seeder() {
    let now = new Date(),
        year = now.getFullYear();

    let getDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    for (let month = 0; month <= now.getMonth(); month++) {
        for (let day = 1; day <= getDaysInMonth(year, month); day++) {
            database.users.forEach(user => {
                let hour = Math.floor(Math.random() * 24) + 1,
                    minute = Math.floor(Math.random() * 59) + 1,
                    second = Math.floor(Math.random() * 59) + 1,
                    created_at = new Date(year, month, day, hour, minute, second);

                database.outcomes.push({
                    id: uuidv4(),
                    created_at: created_at,
                    updated_at: null,
                    detail: lorem.generateWords(4),
                    amount: Math.floor(Math.random() * 250) + 1,
                    user_id: user.id
                });
            });

            if (month === now.getMonth() && day === now.getDate()) {
                break;
            }
        }
    }
}

module.exports = database;