const etudiant = require('../controllers/etudiant.controller');
const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');

router.get('/', catchAsync(etudiant.index));
router.get('/:idEtudiant', catchAsync(etudiant.getEtudiant));

module.exports = router;