const { Router } = require("express")
const {
  createBook,
  updateBook,
  getBookById,
  getAllBooks,
  deleteBook,
} = require("../controllers/bookController")

const router = Router()

router.route("").get(getAllBooks)
router.route("/createbook").post(createBook)
router.route("/:id").get(getBookById)
router.route("/updatebook/:id").put(updateBook)
router.route("/deletebook/:id").delete(deleteBook)

module.exports = router
