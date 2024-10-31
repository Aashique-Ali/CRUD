const express = require("express")

const cors = require("cors")

const app = express()

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
)

app.use(express.json({ limit: "16kb" }))

const bookRouter = require("./routes/bookRouter")

app.use("/api/v1/book", bookRouter)

module.exports = app
