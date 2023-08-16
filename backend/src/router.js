const express = require('express');
const depoimentsController = require("./controllers/depoimentsController");

const router = express.Router();

module.exports = router;

router.get('/depoiments', depoimentsController.getAll);
router.post('/depoiments', depoimentsController.createDepoiment);

router.get('/index', function(req, res) {
    res.render('index');
});