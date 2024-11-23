// // backend/server.js
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());
// app.use(cookieParser());

// mongoose.connect('mongodb+srv://sm1407858:mansoor1@cluster0.kng5k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

// const userSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     password: String,
// });

// const User = mongoose.model('User', userSchema);

// app.post('/api/register', async (req, res) => {
//     const { name, email, password } = req.body;
//     const user = new User({ name, email, password });
//     await user.save();
//     // Set a cookie with the user's ID
//     res.cookie('userId', user._id.toString(), { httpOnly: true });
//     res.status(201).send({ message: 'User registered successfully' });
// });

// app.listen(5000, () => {
//     console.log('Server is running on port 5000');
// });




// app.get('/api/user', async (req, res) => {
//     console.log('Cookies:', req.cookies); // Debugging line
//     const userId = req.cookies.userId;
//     console.log('User ID:', userId); // Debugging line
//     const user = await User.findById(userId);
//     if (user) {
//         res.status(200).send({ name: user.name });
//     } else {
//         res.status(404).send({ message: 'User not found' });
//     }
// });






// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

mongoose.connect('mongodb+srv://sm1407858:mansoor1@cluster0.kng5k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

// Define a simple route to display "Hello, World!" at the root path
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// ... existing code ...

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});