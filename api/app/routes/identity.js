const identityService = require('../services/IdentityService'),
    auth = require('../middlewares/auth');

/**
 * @swagger
 * definitions:
 *   User:
 *     properties:
 *       id:
 *         type: string
 *       name:
 *         type: string
 *       email:
 *         type: string
 */

/**
 * @swagger
 * definitions:
 *   SignIn:
 *     properties:
 *       email:
 *         type: string
 *       password:
 *         type: string
 */

/**
 * @swagger
 * definitions:
 *   Authentication:
 *     properties:
 *       access_token:
 *         type: string
 *       user:
 *         $ref: '#/definitions/User'
 */

module.exports = function (app) {
    /**
     * @swagger
     * /sign-in:
     *   post:
     *     tags:
     *       - Auth
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: SignIn
     *         in: body
     *         required: true
     *         schema:
     *           $ref: '#/definitions/SignIn'
     *     responses:
     *       200:
     *         schema:
     *           $ref: '#/definitions/Authentication'
     *           
     */
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
};