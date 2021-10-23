const express = require('express');
const router = express.Router();

const { logIn, dashBoard } = require('../controllers/main')

router.route('/dashBoard').get(dashBoard)
router.route('/logIn').post(logIn)


module.exports = router