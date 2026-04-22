const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// ADD endpoint (main requirement)
// Example: http://localhost:3000/add?a=5&b=7
app.get('/add', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    if (isNaN(a) || isNaN(b)) {
        return res.send("Error: Please provide valid numbers using query parameters 'a' and 'b'.");
    }

    const sum = a + b;
    res.send(`The sum of ${a} and ${b} is: ${sum}`);
});

// Optional (good for better marks)
app.get('/subtract', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    if (isNaN(a) || isNaN(b)) {
        return res.send("Error: Invalid input");
    }

    res.send(`Result: ${a - b}`);
});

app.get('/multiply', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    if (isNaN(a) || isNaN(b)) {
        return res.send("Error: Invalid input");
    }

    res.send(`Result: ${a * b}`);
});

app.get('/divide', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    if (isNaN(a) || isNaN(b) || b === 0) {
        return res.send("Error: Invalid input");
    }

    res.send(`Result: ${a / b}`);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});