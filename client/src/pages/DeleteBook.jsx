import axios from "axios"
import React from "react"
import { useParams, useNavigate } from "react-router-dom"

const DeleteBook = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/v1/book/deletebook/${id}`,

        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )

      alert("book deleted successfully")
      navigate("/books")
    } catch (error) {
      console.error("can not delete booook", error)
    }
  }
  return (
    <div className="bg-gray-800 min-h-[100vh] flex justify-center items-center">
      <div className="bg-gray-200 w-[500px] rounded-lg h-[150px] flex flex-col text-center justify-center items-center">
        <h1 className="text-2xl">are you sure you want delete product</h1>

        <div className="flex justify-center items-center gap-10 mt-5 text-white">
          <button
            className="bg-gray-800 py-2 px-8 rounded-lg text-xl "
            onClick={() => {
              navigate("/books")
            }}
          >
            No
          </button>
          <button
            onClick={handleDelete}
            className="bg-gray-800 py-2 px-8 rounded-lg text-xl"
          >
            yes
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteBook
