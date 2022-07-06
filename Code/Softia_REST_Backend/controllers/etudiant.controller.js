const Etudiant = require('../models/etudiant.model');

module.exports.index = async (req, res) => {
    Etudiant.findAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving etudiants."
            });
        else res.send(data);
    });
}
module.exports.getEtudiant = async (req, res) => {
    let { idEtudiant } = req.params;
    Etudiant.findById(idEtudiant, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Etudiant with id ${idEtudiant}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Etudiant with id " + idEtudiant
                });
            }
        } else res.send(data);
    });
}