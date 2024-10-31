const Book = require("../models/bookModel")

async function createBook(req, res) {
  try {
    const { title, author, genre, description } = req.body
    const book = await Book.create({
      title,
      author,
      genre,
      description,
    })
    res.status(201).json(book)
  } catch (error) {
    res.status(400).json({ error: "Failed to create book" })
  }
}

async function getAllBooks(req, res) {
  try {
    const books = await Book.find()
    res.status(200).json(books)
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch books" })
  }
}

async function getBookById(req, res) {
  try {
    const { id } = req.params
    const book = await Book.findById(id)
    if (!book) return res.status(404).json({ error: "Book not found" })
    res.status(200).json(book)
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch book" })
  }
}

async function updateBook(req, res) {
  try {
    const { id } = req.params
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
    })
    if (!updatedBook) return res.status(404).json({ error: "Book not found" })
    res.status(200).json(updatedBook)
  } catch (error) {
    res.status(400).json({ error: "Failed to update book" })
  }
}

async function deleteBook(req, res) {
  try {
    const { id } = req.params
    const deletedBook = await Book.findByIdAndDelete(id)
    if (!deletedBook) return res.status(404).json({ error: "Book not found" })
    res.status(200).json({ message: "Book deleted successfully" })
  } catch (error) {
    res.status(500).json({ error: "Failed to delete book" })
  }
}

module.exports = {
  createBook,
  updateBook,
  getBookById,
  getAllBooks,
  deleteBook,
}
