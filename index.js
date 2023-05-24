const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());
const port = 3000;

const logger = require('./util/logger.js');
const gps = require('./routes/gps.js');
const getTime = require('./routes/getTime.js');


app.use((req, res, next) => {
    logger.log({ level: 'info', message: req.body });
    next();
});

// Routes
app.use('/log', gps);
app.use('/get_time', getTime)

// Start server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});