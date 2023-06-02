const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const time = Date.now();
        res.send({ time: time, err: null });
    } catch (error) {
        res.send({ err: error }).status(400);
    }
});

module.exports = router; 