const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 600 },
    { id: 3, name: "Headphones", price: 150 }
];

// REST API endpoint
app.get('/api/products', (req, res) => {
    res.status(200).json(products);
});

// export app for testing
module.exports = app;

// only start server when running directly
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}