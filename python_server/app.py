from flask import Flask
from router.pokemon import poke_bp

app = Flask(__name__)

@app.route("/")
def starting_msg():
    return {"message": "hello you can search pokemon here"}


app.register_blueprint(poke_bp, url_prefix="/pokemon")

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
