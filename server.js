const express = require('express');
//gets the mongoDB connection from db.js
const connectDB = require('./config/db');
const app = express();
//connect db
connectDB();
app.get('/', (req, res) => res.send('API running'));

//define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
