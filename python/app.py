from flask import Flask, render_template, request

app = Flask(__name__)

# In-memory database (replace with an actual database in a real-world scenario)
database = {
    'greetings': ['Hello!', 'Hi there!', 'Greetings!'],
    'commands': ['Tell me a joke', 'What's the weather?', 'Who won the last game?'],
}


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/get_response', methods=['POST'])
def get_response():
    user_input = request.form['user_input']
    response = process_input(user_input)
    return {'response': response}


def process_input(user_input):
    # Add your AI logic here
    # For simplicity, we'll use a basic lookup in the in-memory database
    if user_input.lower() in database:
        return database[user_input.lower()]
    else:
        return "I'm sorry, I don't understand that command."


if __name__ == '__main__':
    app.run(debug=True)
