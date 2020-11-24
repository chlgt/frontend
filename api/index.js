import express from 'express';
import data from '../src/testData2';

const router = express.Router();

router.get('/envios', (req, res) => {

    res.send({envios: data.envios});
});

export default router;