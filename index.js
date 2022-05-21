const  express = require('express')
const app = express()
const port = process.env.port || 5000
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')


dotenv.config();

// Mongo DB connection
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('DB Connection Successful...'))
.catch((err)=> {
    console.log(err);
})

app.use(express.json());

app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)


app.listen(port, () => 
console.log(`Server app listening on port ${port}`
))