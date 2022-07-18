const express = require("express")
const colors = require("colors")
const dotenv = require("dotenv").config()
const { errorHandler } = require("./middleware/errorMiddleware")
const connectDB = require("./config/db")
const PORT = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended:false }))
app.use("/api/goals", require("./routes/goals"))
app.use("/api/users", require("./routes/users"))
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server running on port ${PORT}.`))
