const express = require('express');
const app = express();
const port = 90; // Expose on port 90

// Simple e-commerce homepage
app.get('/', (req, res) => {
    res.send('<h1>Welcome to My E-commerce Website</h1><p>Shop with us!</p>');
});

app.listen(port, () => {
    console.log(`E-commerce app running on port ${port}`);
});

