/*
  queries.js
  MongoDB queries for PLP Bookstore Assignment
  Tasks 2–5: CRUD, Advanced Queries, Aggregation, Indexing
*/

// =======================
// Task 2: Basic CRUD Operations
// =======================

// 1. Find all books in a specific genre (e.g., Fiction)
db.books.find({ genre: "Fiction" }).pretty()

// 2. Find books published after a certain year (e.g., 2000)
db.books.find({ published_year: { $gt: 2000 } }).pretty()

// 3. Find books by a specific author (e.g., George Orwell)
db.books.find({ author: "George Orwell" }).pretty()

// 4. Update the price of a specific book (e.g., "1984")
db.books.updateOne(
  { title: "1984" },
  { $set: { price: 12.99 } }
)

// 5. Delete a book by its title (e.g., "Moby Dick")
db.books.deleteOne({ title: "Moby Dick" })

// =======================
// Task 3: Advanced Queries
// =======================

// 1. Find books that are both in stock and published after 2010
// Only return title, author, and price
db.books.find(
  { in_stock: true, published_year: { $gt: 2010 } },
  { _id: 0, title: 1, author: 1, price: 1 }
).pretty()

// 2. Sort books by price ascending
db.books.find().sort({ price: 1 }).pretty()

// 3. Sort books by price descending
db.books.find().sort({ price: -1 }).pretty()

// 4. Pagination example: 5 books per page
// Page 1
db.books.find().skip(0).limit(5).pretty()
// Page 2
db.books.find().skip(5).limit(5).pretty()

// =======================
// Task 4: Aggregation Pipeline
// =======================

// 1. Average price of books by genre
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      avgPrice: { $avg: "$price" }
    }
  }
])

// 2. Author with the most books
db.books.aggregate([
  {
    $group: {
      _id: "$author",
      bookCount: { $sum: 1 }
    }
  },
  { $sort: { bookCount: -1 } },
  { $limit: 1 }
])

// 3. Group books by publication decade and count them
db.books.aggregate([
  {
    $group: {
      _id: { $subtract: ["$published_year", { $mod: ["$published_year", 10] }] },
      count: { $sum: 1 }
    }
  },
  { $sort: { _id: 1 } }
])

// =======================
// Task 5: Indexing
// =======================

// 1. Create an index on the title field
db.books.createIndex({ title: 1 })

// 2. Create a compound index on author and published_year
db.books.createIndex({ author: 1, published_year: -1 })

// 3. Demonstrate performance improvement using explain()
// Single index
db.books.find({ title: "1984" }).explain("executionStats")

// Compound index
db.books.find({ author: "George Orwell", published_year: { $gt: 2000 } }).explain("executionStats")
