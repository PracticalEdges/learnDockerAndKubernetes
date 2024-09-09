# app.py
from flask import Flask
from .router.pokemon import poke_bp


def create_app():
    app = Flask(__name__)

    @app.route("/")
    def starting_msg():
        return {"message": "hello you can search pokemon here"}

    app.register_blueprint(poke_bp, url_prefix="/pokemon")

    return app


if __name__ == "__main__":
    app = create_app()
    app.run(debug=True, host="0.0.0.0", port=5000)
