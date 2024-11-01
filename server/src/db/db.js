require("dotenv").config()
const mongoose = require("mongoose")

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`)
    console.log(`mongodb connected!! `)
  } catch (error) {
    console.log("mongodb connection error", error)
    process.exit(1)
  }
}

module.exports = connectDB
