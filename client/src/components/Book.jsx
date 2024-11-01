import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"

const Books = () => {
  const { id } = useParams()
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [genre, setGenre] = useState("")
  const [description, setDescription] = useState("")
  const [loading, setLoading] = useState(false)
  const [bookId, setBookId] = useState("")

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
        setBookId(response.data._id)
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
        alert("an error occured")
        console.log(error)
      })
  }, [id])

  return (
    <div className="flex justify-center items-center">
      <div className="max-w-sm flex flex-col justify-between  min-w-[60%] min-h-[500px] bg-teal-500 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6 m-4 border border-gray-200">
        <h2 className="text-xl font-semibold text-black mb-2">{title}</h2>
        <p className="text-sm text-gray-600 mb-1">
          by <span className="font-medium text-gray-700">{author}</span>
        </p>
        <span className="inline-block bg-blue-100 text-blue-500 px-3 py-1 text-xs font-semibold rounded-full mb-3">
          {genre}
        </span>
        <p className="text-gray-700 text-sm mb-4">{description}</p>
        <div className="flex gap-10">
          <button
            onClick={() => navigate(`/books/edit/${bookId}`)}
            className="mt-auto bg-blue-500 text-white text-sm font-medium py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200"
          >
            Edit
          </button>
          <button
            onClick={() => navigate(`/books/delete/${bookId}`)}
            className="mt-auto bg-red-500 text-white text-sm font-medium py-2 px-4 rounded hover:bg-red-600 transition-colors duration-200"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default Books
