const sql = require("./db.js");

const Convention = function (convention) {
    this.idConvention = convention.idConvention;
    this.nom = convention.nom;
    this.nbHeur = convention.nbHeur;
};

Convention.findAll = (result) => {
    let query = "SELECT * FROM Convention";
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("conventions: ", res.recordset);
        result(null, res.recordset);
    });
};

Convention.findById = (idConvention, result) => {
    let query = "SELECT * FROM Convention where idConvention='" + idConvention + "'";
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        if (res.recordset.length) {
            console.log("found convention: ", res.recordset[0]);
            result(null, res.recordset[0]);
            return;
        }
        // not found Convention with the idEtudiant
        result({ kind: "not_found" }, null);
    });
};

module.exports = Convention;