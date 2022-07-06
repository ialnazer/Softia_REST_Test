const Attestation = require('../models/attestation.model');

module.exports.index = async (req, res) => {
    Attestation.findAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving attestations."
            });
        else res.send(data);
    });
}
module.exports.addAttestation = async (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    let { idEtudiant, idConvention, message } = req.body;
    let idAttestation = idEtudiant + idConvention;
    // Create an Attestation
    const attestation = new Attestation({
        idAttestation: idAttestation,
        message: message,
        etudiant: idEtudiant,
        convention: idConvention
    });
    // Save Attestation in the database
    Attestation.create(attestation, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Attestation."
            });
        else res.send(data);
    });
}