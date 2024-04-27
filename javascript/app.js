const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// In-memory database (replace with an actual database in a real-world scenario)
const database = {
    'greetings': ['Hello!', 'Hi there!', 'Greetings!'],
    'commands': ['Tell me a joke', 'What\'s the weather?', 'Who won the last game?'],
};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/get_response', (req, res) => {
    const user_input = req.body.user_input;
    const response = processInput(user_input);
    res.json({ response });
});

function processInput(user_input) {
    // Add your AI logic here
    // For simplicity, we'll use a basic lookup in the in-memory database
    if (user_input.toLowerCase() in database) {
        return database[user_input.toLowerCase()];
    } else {
        return "I'm sorry, I don't understand that command.";
    }
}

app.listen(port, () => {
    console.log(`GYANI Bot listening at http://localhost:${port}`);
});
