import express from "express";
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from "mongoose";

import router from "./router";

const app = express()
const PORT = 3500;
const server = http.createServer(app);

app.use(cors({
    credentials:true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());


const DATABASE_URL="mongodb+srv://Shewd:3dL5bWpeBIMIcN98@vocabularyhelperdb.ea34ucy.mongodb.net/?retryWrites=true&w=majority"

mongoose.Promise = Promise;
mongoose.connect(DATABASE_URL);
mongoose.connection.on('error', (error: Error) => console.log(error));

app.use('/', router());

server.listen(PORT,() => console.log(`Server is live at http://localhost:${PORT}`));