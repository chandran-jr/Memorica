import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

const CONNECTION_URL = "mongodb+srv://govindchandran:govindchandran123@cluster0.x8qxa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => app.listen(PORT, () => console.log("Server running on 5000"))).catch((error) => console.error(error.message));