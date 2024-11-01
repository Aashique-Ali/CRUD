import React, { useEffect, useState } from "react"
import axios from "axios"
import Books from "../components/Book"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const AllBooks = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BOOK_URI}`)
      .then((response) => {
        setData(response.data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err)
        setLoading(false)
      })
  }, [])
  console.log(data)
  if (error) {
    return <h1>Something went wrong</h1>
  }
  if (loading) {
    return <h1>loading...</h1>
  }
  return (
    <div className="bg-gray-800 py-5 min-h-[100vh] flex justify-center items-center  flex-wrap">
      {data.map((item) => {
        return (
          <div key={item._id}>
            <div className="max-w-sm flex flex-col justify-between  w-[400px] h-[250px] bg-teal-500 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6 m-4 border border-gray-200">
              <h2 className="text-xl font-semibold text-black mb-2">
                {item.title}
              </h2>
              <p className="text-sm text-gray-600 mb-1">
                by
                <span className="font-medium text-gray-700 pl-2">
                  {item.author}
                </span>
              </p>
              <span className="inline-block bg-blue-100 text-blue-500 px-3 py-1 text-xs font-semibold rounded-full mb-3">
                {item.genre}
              </span>
              <p className="text-gray-700 text-sm mb-4">
                {item.description && item.description.slice(0, 100)}
              </p>
              <div className="flex gap-10">
                <button
                  onClick={() => navigate(`/books/${item._id}`)}
                  className="mt-auto bg-green-500 text-white text-sm font-medium py-2 px-4 rounded hover:bg-green-600 transition-colors duration-200"
                >
                  Read More
                </button>
                <button
                  onClick={() => navigate(`/books/edit/${item._id}`)}
                  className="mt-auto bg-blue-500 text-white text-sm font-medium py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200"
                >
                  Edit
                </button>
                <button
                  onClick={() => navigate(`/books/delete/${item._id}`)}
                  className="mt-auto bg-red-500 text-white text-sm font-medium py-2 px-4 rounded hover:bg-red-600 transition-colors duration-200"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default AllBooks
