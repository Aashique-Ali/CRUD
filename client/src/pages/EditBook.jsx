import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const AddBook = () => {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [genre, setGenre] = useState("")
  const [description, setDescription] = useState("")
  const [loading, setLoading] = useState(false)
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    setLoading(true)
    axios
      .get(`${import.meta.env.VITE_BOOK_URI}/${id}`)
      .then((response) => {
        setTitle(response.data.title)
        setAuthor(response.data.author)
        setGenre(response.data.genre)
        setDescription(response.data.description)
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
        alert("an error occured")
        console.log(error)
      })
  }, [id])

  const handleEditBook = (e) => {
    e.preventDefault()
    const data = {
      title,
      author,
      genre,
      description,
    }

    setLoading(true)
    axios
      .put(`${import.meta.env.VITE_BOOK_URI}/updatebook/${id}`, data)
      .then(() => {
        setLoading(false)
        navigate("/books")
      })
      .catch((error) => {
        setLoading(false)
        alert("an error happened")
        console.log(error)
      })
  }

  return (
    <div className="bg-gray-800 min-h-[100vh] p-5">
      <div className="max-w-lg mx-auto p-6 bg-gray-200 shadow-md rounded-md">
        <h2 className="text-2xl font-bold text-center mb-6">Add a New Book</h2>
        <form onSubmit={handleEditBook} className="space-y-4">
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
              value={description}
              style={{ resize: "none" }}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Save Book
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddBook
