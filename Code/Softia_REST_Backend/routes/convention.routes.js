const convention = require('../controllers/convention.controller');
const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');

router.get('/', catchAsync(convention.index));
router.get('/:idConvention', catchAsync(convention.getConvention));

module.exports = router;