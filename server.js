const express = require('express');
const mongoose = require('mongoose');
const companyRoutes = require('./routes/companyRoutes');
const communicationRoutes = require('./routes/communicationRoutes');

const app = express();
const port = 5000;

// Middleware to parse JSON requests
app.use(express.json());

// Database connection (MongoDB in this case)
mongoose.connect('mongodb://localhost:27017/communicationTracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// API Routes
app.use('/api/companies', companyRoutes);
app.use('/api/communications', communicationRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});



