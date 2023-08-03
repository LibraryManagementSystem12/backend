const mongoose = require('mongoose');

const BorrowingSchema = new mongoose.Schema({
  bookId: { type: mongoose.Schema.Types.ObjectId, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  bookName:{ type: String, required: true},
  userName: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  status: { type: String, default: 'pending' },
});

module.exports = mongoose.model('Borrowing', BorrowingSchema);
