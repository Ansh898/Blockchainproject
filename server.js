const express = require('express');
const bodyParser = require('body-parser');
const Blockchain = require('./blockchain');

const app = express();
const blockchain = new Blockchain();

app.use(bodyParser.json());

app.get('/Blockchain/X:\Desktop\Jetking Projects\Blockchain', (req, res) => {
    res.send(blockchain);
});

app.post('/Blockchain/X:\Desktop\Jetking Projects\Blockchain', (req, res) => {
    const data = req.body.data;
    const newBlock = new Block(blockchain.chain.length, new Date().toLocaleString(), data);
    blockchain.addBlock(newBlock);
    res.send(newBlock);
});

app.listen(1000, () => {
    console.log('Server started on port 1000');
});
