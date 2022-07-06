const Convention = require('../models/convention.model');

module.exports.index = async (req, res) => {
    Convention.findAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving conventions."
            });
        else res.send(data);
    });
}
module.exports.getConvention = async (req, res) => {
    let { idConvention } = req.params;
    Convention.findById(idConvention, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Convention with id ${idConvention}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Convention with id " + idConvention
                });
            }
        } else res.send(data);
    });
}
