const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const ExpressError = require('./utils/ExpressError');
const etudiantRoutes = require('./routes/etudiant.routes')
const conventiontRoutes = require('./routes/convention.routes')
const attestationRoutes = require('./routes/attestation.routes')
let corsOptions = {
    origin: "http://localhost:3000"
};

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors(corsOptions));

app.use('/etudiant', etudiantRoutes);
app.use('/convention', conventiontRoutes);
app.use('/attestation', attestationRoutes);

app.all('*', (req, res, next) => {
    throw new ExpressError('Page Not Found', 404)
})
app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Oh no sth went wrong';
    res.status(statusCode);
    res.send(err);
})
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});