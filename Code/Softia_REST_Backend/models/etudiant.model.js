const sql = require("./db.js");

const Etudiant = function (etudiant) {
  this.idEtudiant = etudiant.idEtudiant;
  this.nom = etudiant.nom;
  this.prenom = etudiant.prenom;
  this.mail = etudiant.mail;
  this.convention = etudiant.convention;
};

Etudiant.findAll = (result) => {
  let query = "SELECT * FROM Etudiant";
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("etudiants: ", res.recordset);
    result(null, res.recordset);
  });
};

Etudiant.findById = (idEtudiant, result) => {
  let query = "SELECT * FROM Etudiant where idEtudiant='" + idEtudiant + "'";
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.recordset.length) {
      console.log("found etudiant: ", res.recordset[0]);
      result(null, res.recordset[0]);
      return;
    }
    // not found Etudiant with the idEtudiant
    result({ kind: "not_found" }, null);
  });
};

module.exports = Etudiant;