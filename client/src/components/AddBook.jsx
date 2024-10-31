import axios from "axios"
import React, { useState } from "react"

const AddBook = () => {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [genre, setGenre] = useState("")
  const [desc, setDesc] = useState("")

  //   const handleChange = (e)=>{

  //   }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/book/createbook",
        {
          title,
          author,
          genre,
          desc,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      console.log("Response:", response.data)
      alert("book added successfully")
      setTitle("")
      setAuthor("")
      setGenre("")
      setDesc("")
    } catch (error) {
      console.error("can not add booook", error)
    }
  }

  return (
    <div className="bg-gray-800 min-h-[100vh] p-5">
      <div className="max-w-lg mx-auto p-6 bg-gray-200 shadow-md rounded-md">
        <h2 className="text-2xl font-bold text-center mb-6">Add a New Book</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div>
            <label
              htmlFor="author"
              className="block text-sm font-medium text-gray-700"
            >
              Author
            </label>
            <input
              type="text"
              name="author"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div>
            <label
              htmlFor="genre"
              className="block text-sm font-medium text-gray-700"
            >
              Genre
            </label>
            <input
              type="text"
              name="genre"
              id="genre"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              name="description"
              id="description"
              value={desc}
              style={{ resize: "none" }}
              onChange={(e) => setDesc(e.target.value)}
              rows="4"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddBook
