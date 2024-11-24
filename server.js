// const express = require('express');
// const cors = require('cors');

// const app = express();
// const port = process.env.PORT || 4040;

// app.use(cors());

// app.get('/', (req, res) => {
//     res.send('Hello!');
// });

// app.get('/api/message', (req, res) => {
//     res.json({ message: 'Hello from the backend!' });
// });

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });


const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 4040;

app.use(cors());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'frontend/build')));

app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});