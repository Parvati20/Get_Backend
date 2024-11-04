const express = require('express');
const data = require("./data.json");
const cors = require("cors");
const app = express();  // Create an instance of express. App is used to handle requests and responses, routing, server configuration.
const port = 3000;     // Define the port variable

app.use(cors());

app.get("/", (req, res) => {   // This is a route handler. It is executed when a request is made to the specified path.
    res.send("please switch to /api/data to get the data");
});

// we use both, normal or routing path

app.get("/api/data", (req, res) => {  // When creating routes path wise
    res.send(data);
});

app.listen(port, () => {   // Start the server and listen on the port.
    console.log(`Example app listening at http://localhost:${port}`);  // Corrected template literal
});
