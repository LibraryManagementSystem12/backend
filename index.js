require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./db');
const bookRoutes = require('./routes/bookRoutes'); // Import book routes
const userRoutes = require('./routes/userRoutes'); // Import user routes
const borrowingRoutes = require('./routes/borrowingRoutes'); // Import borrowing routes
const cdRoutes = require('./routes/cdRoutes'); // Import cd routes
const cdBorrowingRoutes = require('./routes/cdBorrowingRoutes'); // Import cd borrowing routes
const paymentRoutes = require('./routes/paymentRoutes'); // Import payment routes

connection();

app.use(cors());
app.use(express.json());

// Use book routes
app.use('/api/books', bookRoutes);
// Use user routes
app.use('/api/users', userRoutes);
// Use borrowing routes
app.use('/api/borrowings', borrowingRoutes);
// Use cd routes
app.use('/api/cds', cdRoutes);
// Use cd borrowing routes
app.use('/api/cd-borrowings', cdBorrowingRoutes);
// Use payment routes
app.use('/api/payments', paymentRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
