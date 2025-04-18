const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Book Schema
const bookSchema = new mongoose.Schema({
    title: String,
    description: String,
    category: String,
    trending: Boolean,
    coverImage: String,
    oldPrice: Number,
    newPrice: Number
});

const Book = mongoose.model('Book', bookSchema);

// Connect to MongoDB
mongoose.connect(process.env.DB_URL)
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

// Read books.json
const booksData = JSON.parse(
    fs.readFileSync(
        path.join(__dirname, '../frontend/public/books.json'),
        'utf-8'
    )
);

// Remove _id field from each book
const processedBooks = booksData.map(({ _id, ...book }) => book);

// Import books
async function importBooks() {
    try {
        // Clear existing books
        await Book.deleteMany({});
        
        // Insert new books
        const result = await Book.insertMany(processedBooks);
        console.log(`${result.length} books successfully imported!`);
    } catch (error) {
        console.error('Error importing books:', error);
    } finally {
        mongoose.connection.close();
    }
}

importBooks(); 