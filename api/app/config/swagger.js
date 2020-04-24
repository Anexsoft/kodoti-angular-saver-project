const swaggerJSDoc = require('swagger-jsdoc'),
    swaggerUi = require('swagger-ui-express');

module.exports = (app) => {
    // swagger definition
    let swaggerDefinition = {
        info: {
            title: 'KODOTI Saver',
            version: '1.0.0',
            description: 'API desarrollada para el curso de Angular.',
            courseUrl: "https://kodoti.com/cursos/angular-desde-cero"
        },
        basePath: '/',
    };

    // options for the swagger docs
    let options = {
        // import swaggerDefinitions
        swaggerDefinition: swaggerDefinition,
        // path to the API docs
        apis: ['./app/routes/*.js'],
    };

    // swagger-doc
    let swaggerSpec = swaggerJSDoc(options);
    app.get('/swagger.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });

    // swagger-ui
    app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};