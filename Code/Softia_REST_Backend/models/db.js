const sql = require("mssql/msnodesqlv8");
const dbConfig = require("../config/db.Config");

const dbConnect = new sql.connect(dbConfig,
    function (err) {
        if (err) {
            console.log("Error while connecting database: " + err)
        } else {
            console.log("connected to database: " + dbConfig.server)
        }
    }
);
module.exports = dbConnect;