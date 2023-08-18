const express = require('express');
const depoimentsController = require("./controllers/depoimentsController");
const middlewares = require("./middlewares/depoimentsMiddleware");

const router = express.Router();

module.exports = router;

router.get('/depoiments', depoimentsController.getAll);
router.post('/depoiments', middlewares.validateBody, depoimentsController.createDepoiment);
router.delete('/depoiments/:id', depoimentsController.deleteDepoiment);
router.put('/depoiments/:id', middlewares.validateBody, depoimentsController.updateDepoiment);

router.get('/index', function(req, res) {
    res.render('index');
});