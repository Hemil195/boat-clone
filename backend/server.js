const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');

// Debug: Check if .env file exists and read its contents
const envPath = path.join(__dirname, '.env');
console.log('Looking for .env file at:', envPath);
console.log('.env file exists:', fs.existsSync(envPath));

if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  console.log('Content of .env file:');
  console.log(envContent.split('\n').map(line => {
    if (line.includes('MONGODB_URI')) {
      return 'MONGODB_URI=***hidden***';
    }
    if (line.includes('JWT_SECRET')) {
      return 'JWT_SECRET=***hidden***';
    }
    return line;
  }).join('\n'));
}

// Load environment variables
const result = dotenv.config();

if (result.error) {
  console.error('Error loading .env file:', result.error);
  process.exit(1);
}

// Debug: Log environment variables (without sensitive data)
console.log('Environment variables loaded:');
console.log('MONGODB_URI exists:', !!process.env.MONGODB_URI);
console.log('JWT_SECRET exists:', !!process.env.JWT_SECRET);
console.log('PORT:', process.env.PORT || 5000);

// Check if required environment variables are set
if (!process.env.MONGODB_URI) {
  console.error('Error: MONGODB_URI is not defined in environment variables');
  console.error('Please make sure you have created a .env file with MONGODB_URI');
  process.exit(1);
}

if (!process.env.JWT_SECRET) {
  console.error('Error: JWT_SECRET is not defined in environment variables');
  console.error('Please make sure you have created a .env file with JWT_SECRET');
  process.exit(1);
}

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection with better error handling and options
console.log('Attempting to connect to MongoDB...');
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'boat-clone' // Explicitly set database name
})
.then(() => {
  console.log('Successfully connected to MongoDB.');
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
  console.error('Please check your MongoDB connection string and make sure MongoDB Atlas is running');
  process.exit(1);
});

// Routes
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 