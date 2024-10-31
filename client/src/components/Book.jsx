import React, { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

const Books = ({ title, author, genre, desc }) => {
  const { id } = useParams()
  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/v1/book/deletebook${id}`,

        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      if (response.ok) {
        alert("book deleted successfully")
      }
    } catch (error) {
      console.error("can not delete booook", error)
    }
  }

  return (
    <div>
      <div className="max-w-sm flex flex-col justify-between  w-[400px] h-[250px] bg-teal-500 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6 m-4 border border-gray-200">
        <h2 className="text-xl font-semibold text-black mb-2">{title}</h2>
        <p className="text-sm text-gray-600 mb-1">
          by <span className="font-medium text-gray-700">{author}</span>
        </p>
        <span className="inline-block bg-blue-100 text-blue-500 px-3 py-1 text-xs font-semibold rounded-full mb-3">
          {genre}
        </span>
        <p className="text-gray-700 text-sm mb-4">{desc}</p>
        <div className="flex gap-10">
          <button className="mt-auto bg-blue-500 text-white text-sm font-medium py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200">
            Read More
          </button>
          <button className="mt-auto bg-red-500 text-white text-sm font-medium py-2 px-4 rounded hover:bg-red-600 transition-colors duration-200">
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default Books
