const attestation = require('../controllers/attestation.controller');
const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');

router.route('/')
        .get(catchAsync(attestation.index))
        .post(catchAsync(attestation.addAttestation));

module.exports = router;