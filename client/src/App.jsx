import { useState } from "react"
import Books from "./components/Book"
import AllBooks from "./pages/AllBooks"
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"
import Home from "./pages/Home"
import AddBook from "./components/AddBook"
import DeleteBook from "./pages/DeleteBook"
import EditBook from "./pages/EditBook"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<AllBooks />} />
        <Route path="/books/:id" element={<Books />} />
        <Route path="/books/add" element={<AddBook />} />
        <Route path="/books/delete/:id" element={<DeleteBook />} />
        <Route path="/books/edit/:id" element={<EditBook />} />
      </>
    )
  )
  return <RouterProvider router={router}></RouterProvider>
}

export default App
