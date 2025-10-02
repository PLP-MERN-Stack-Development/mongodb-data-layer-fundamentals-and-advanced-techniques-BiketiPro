# MongoDB Fundamentals - Week 1

## Setup Instructions

Before you begin this assignment, please make sure you have the following installed:

1. **MongoDB Community Edition** - [Installation Guide](https://www.mongodb.com/docs/manual/administration/install-community/)
2. **MongoDB Shell (mongosh)** - This is included with MongoDB Community Edition
3. **Node.js** - [Download here](https://nodejs.org/)

### Node.js Package Setup

Once you have Node.js installed, run the following commands in your assignment directory:

```bash
# Initialize a package.json file
npm init -y

# Install the MongoDB Node.js driver
npm install mongodb
Assignment Overview
This week focuses on MongoDB fundamentals including:

Creating and connecting to MongoDB databases

CRUD operations (Create, Read, Update, Delete)

MongoDB queries and filters

Aggregation pipelines

Indexing for performance

Getting Started
Accept the GitHub Classroom assignment invitation.

Clone your personal repository that was created by GitHub Classroom.

Install MongoDB locally or set up a MongoDB Atlas account.

Run the provided insert_books.js script to populate your database.

Complete the tasks in the assignment document and save your queries in queries.js.

Files Included
Week1-Assignment.md: Detailed assignment instructions

insert_books.js: Script to populate your MongoDB database with sample book data

queries.js: MongoDB queries for CRUD, advanced filtering, aggregation, and indexing

README.md: Setup and usage instructions

How to Run the Project
1. Insert Sample Books
Run the insert_books.js script to populate the books collection:

bash
Copy code
node insert_books.js
This will drop the collection if it already exists, then insert 12 sample books.

2. Open MongoDB Shell
Start the shell:

bash
Copy code
mongosh
Switch to the database:

javascript
Copy code
use plp_bookstore
3. Test Queries
You can copy queries from queries.js and run them interactively.

Examples:

javascript
Copy code
// Find all Fiction books
db.books.find({ genre: "Fiction" }).pretty()

// Find books by George Orwell
db.books.find({ author: "George Orwell" }).pretty()

// Update the price of "1984"
db.books.updateOne({ title: "1984" }, { $set: { price: 12.99 } })

// Delete "Moby Dick"
db.books.deleteOne({ title: "Moby Dick" })
Aggregation example:

javascript
Copy code
db.books.aggregate([
  { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
])
Indexing example:

javascript
Copy code
db.books.createIndex({ title: 1 })
db.books.createIndex({ author: 1, published_year: -1 })
db.books.find({ title: "1984" }).explain("executionStats")
Requirements
Node.js (v18 or higher)

MongoDB (local installation or Atlas account)

MongoDB Shell (mongosh) or MongoDB Compass

Submission
Ensure the following are in your repository before submission:

insert_books.js

queries.js

README.md

Screenshot of MongoDB Compass or Atlas showing the books collection

Commit and push:

bash
Copy code
git add .
git commit -m "Complete MongoDB assignment with scripts and queries"
git push origin main
Resources
MongoDB Documentation

MongoDB University

MongoDB Node.js Driver

yaml
Copy code

---

👉 This way, your `README.md` covers:  
- **Original instructions** (so the assignment is traceable).  
- **Your added steps** (so the reviewer can run and te
