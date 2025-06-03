/**
 * Weather Information API Service
 * @author Gabriel Demetrios Lafis
 */

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({
        message: 'Weather Information API Service',
        author: 'Gabriel Demetrios Lafis',
        version: '1.0.0'
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Weather Information API Service running on port ${PORT}`);
    console.log('👨‍💻 Created by Gabriel Demetrios Lafis');
});
