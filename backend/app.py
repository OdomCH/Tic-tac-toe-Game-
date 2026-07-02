from flask import Flask
from flask_cors import CORS
from routes import api

app = Flask(__name__)
CORS(app)  # allows the React dev server to call this API
app.register_blueprint(api)


@app.route("/")
def health_check():
    return {"status": "ok", "message": "Tic-Tac-Toe backend is running"}


if __name__ == "__main__":
    app.run(debug=True, port=5000)