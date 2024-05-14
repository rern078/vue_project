const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/fourproject', {
      useNewUrlParser: true,
      useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
      console.log('Connected to MongoDB');
});

// User Schema
const userSchema = new mongoose.Schema({
      useracc: String,
      email: String,
      passwd: String,
      repasswd: String,
      callphone: Number,
      referrall_id: Number,
      firstname: String,
      lastname: String,
      currency: String,
      bank: String,
      accbankname: String,
      accbanknumber: Number
});

const User = mongoose.model('User', userSchema);

// Registration Route
app.post('/register', async (req, res) => {
      const { useracc, email, passwd,repasswd, callphone, referrall_id, firstname, lastname, currency, bank, accbankname, accbanknumber } = req.body;

      const user = new User({ useracc, email, passwd,repasswd, callphone, referrall_id, firstname, lastname, currency, bank, accbankname, accbanknumber });

      try {
            await user.save();
            res.status(201).json({ success: true });
      } catch (error) {
            console.error('Error registering user:', error);
            res.status(500).json({ success: false, message: error.message });
      }
});

// Login Route
app.post('/login', async (req, res) => {
      const { useracc, passwd } = req.body;

      try {
            console.log(`Attempting to log in user: ${useracc}`);
            const user = await User.findOne({ useracc, passwd });
            if (user) {
                  res.json({ success: true, message: 'Login successful!' });
            } else {
                  res.json({ success: false, message: 'Invalid username or password' });
            }
      } catch (error) {
            console.error('Error during login:', error);
            res.status(500).json({ success: false, message: error.message });
      }
});

// Start Server
app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
});
