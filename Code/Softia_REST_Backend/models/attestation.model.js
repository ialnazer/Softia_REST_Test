const sql = require("./db.js");

const Attestation = function (attestation) {
    this.idAttestation = attestation.idAttestation;
    this.message = attestation.message;
    this.etudiant = attestation.etudiant;
    this.convention = attestation.convention;
};

Attestation.findAll = (result) => {
    let query = "SELECT * FROM Attestation";
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("attestations: ", res.recordset);
        result(null, res.recordset);
    });
};

Attestation.create = (attestation, result) => {
    let { idAttestation, etudiant, convention, message } = attestation;
    sql.query("INSERT INTO Attestation (idAttestation, etudiant, convention, message) VALUES ('" + idAttestation + "','" + etudiant + "','" + convention + "','" + message + "')", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created attestation of Id: " + idAttestation);
        result(null, { idAttestation, etudiant, convention, message });
    });
};

module.exports = Attestation;