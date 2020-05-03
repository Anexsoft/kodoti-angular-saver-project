const outcomeService = require('../services/OutcomeService')
auth = require('../middlewares/auth');

/**
 * @swagger
 * definitions:
 *   Outcome:
 *     properties:
 *       id:
 *         type: string
 *       detail:
 *         type: string
 *       amount:
 *         type: number
 *       user_id:
 *         type: string
 *       created_at:
 *         type: string
 *       updated_at:
 *         type: string
 */

/**
 * @swagger
 * definitions:
 *   ArrayOfOutcome:
 *     type: array
 *     items:
 *       $ref: '#/definitions/Outcome'
 */

/**
* @swagger
* definitions:
*   OutcomeCreate:
*     properties:
*       detail:
*         type: string
*       amount:
*         type: number
*       user_id:
*         type: string
*/

/**
* @swagger
* definitions:
*   OutcomeUpdate:
*     properties:
*       detail:
*         type: string
*       amount:
*         type: number
*/

module.exports = function (app) {
    /**
     * @swagger
     * /outcomes:
     *   get:
     *     tags:
     *       - Outcomes
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: year
     *         in: path
     *         required: true
     *       - name: month
     *         in: path
     *         required: true
     *       - name: user_id
     *         in: path
     *         required: true
     *     responses:
     *       200:
     *         schema:
     *           type: array
     *           $ref: '#/definitions/ArrayOfOutcome'
     *           
     */
    app.get('/outcomes', (req, res) => {
        let year = req.query.year || null;
        let month = req.query.month || null;
        let userId = req.query.user_id || null;

        if (!year || !month || !userId) {
            res.status(400).send('Invalid parameters.');
            return;
        }

        res.json(outcomeService.getAll(userId, year, month));
    });

    /**
     * @swagger
     * /outcomes/{id}:
     *   get:
     *     tags:
     *       - Outcomes
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         required: true
     *     responses:
     *       200:
     *         schema:
     *           $ref: '#/definitions/Outcome'
     *           
     */
    app.get('/outcomes/:id', (req, res) => {
        let entry = outcomeService.find(req.params.id);

        if (!entry) {
            res.status(404).send();
        }

        res.json(entry);
    });

    /**
     * @swagger
     * /outcomes:
     *   post:
     *     tags:
     *       - Outcomes
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: OutcomeCreate
     *         in: body
     *         required: true
     *         schema:
     *           $ref: '#/definitions/OutcomeCreate'
     *     responses:
     *       200:
     *         schema:
     *           $ref: '#/definitions/Outcome'
     *           
     */
    app.post('/outcomes', (req, res) => {
        res.status(201).json(outcomeService.create(req.body));
    });

    /**
     * @swagger
     * /outcomes/{id}:
     *   put:
     *     tags:
     *       - Outcomes
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         required: true
     *       - name: OutcomeUpdate
     *         in: body
     *         required: true
     *         schema:
     *           $ref: '#/definitions/OutcomeUpdate'
     *     responses:
     *       204:
     *         description: No content
     */
    app.put('/outcomes/:id', (req, res) => {
        outcomeService.update(req.params.id, req.body)
        res.status(204).send();
    });

    /**
     * @swagger
     * /outcomes/{id}:
     *   delete:
     *     tags:
     *       - Outcomes
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         required: true
     *     responses:
     *       204:
     *         description: No content
     */
    app.delete('/outcomes/:id', (req, res) => {
        outcomeService.remove(req.params.id)
        res.status(204).send();
    });
};