const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
const port = process.env.PORT || 4040;

app.use(cors());
app.use(helmet());

app.get('/', (req, res) => {
    res.send('Hello!');
});

app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});