const express = require('express');
const app = express();
const port = 9000;

const users = [
    { id: 1, name: "Jhon Doe" },
    { id: 2, name: "Jane Doe" },
    { id: 3, name: "Jhon Smith" },
    { id: 4, name: "Jane Smith" }
]

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Request GET en /");
});

app.get("/users", (req, res) => {
    res.json(users);
});

app.get("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);

    if (!user) {
        res.status(404).send("User nor found");
    } else {
        res.status(200).json(user);
    }
});

app.listen(port, () => console.log("Server emepezo en http://localhost:" + port));