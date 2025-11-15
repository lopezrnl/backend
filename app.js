import express from "express";
import 'dotenv/config.js';
import cors from 'cors';
import bookRoutes from "./routers/BookRoutes.js";
import studentRoutes from "./routers/StudentRoutes.js";

// create express app
const app = express();
let corsOptions = {
    origin : process.env.ORIGIN
};

// middleware
app.use(express.json());
app.use(cors(corsOptions));

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use('/books', bookRoutes);
app.use('/students', studentRoutes);

try {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Listening on port ${process.env.PORT || 3000}...`);
    });
} catch (e) {
    console.log(e);
}