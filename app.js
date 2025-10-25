import express from "express";

// create express app
const app = express();

// middleware
app.use(express.json());

const port = 8205;

try {
    app.listen(port, () => {
        console.log(`Listening on port 8205...`);
    });
} catch (error) {
    console.log(error);
}

app.get('/raniel',async(request, response) => {
    response.status(200).json({message: "Hello I'm Raniel"});
});