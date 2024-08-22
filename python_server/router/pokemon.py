from flask import Blueprint, jsonify, request
import requests

poke_bp = Blueprint("pokemon", __name__)


@poke_bp.route("/<name>", methods=["GET"])
def get_pokemon(name):
    response = requests.get(f"https://pokeapi.co/api/v2/pokemon/{name}")
    try:
        response.raise_for_status()  # Check for HTTP errors
        return jsonify(response.json())
    except requests.exceptions.HTTPError as http_err:
        return jsonify({"error": str(http_err)}), response.status_code
    except ValueError as json_err:
        return jsonify({"error": "Invalid JSON response"}), 500


@poke_bp.route("/ability/<name>", methods=["GET"])
def get_pokemon_ability(name):
    response = requests.get(f"https://pokeapi.co/api/v2/ability/{name}")
    try:
        response.raise_for_status()  # Check for HTTP errors
        return jsonify(response.json())
    except requests.exceptions.HTTPError as http_err:
        return jsonify({"error": str(http_err)}), response.status_code
    except ValueError as json_err:
        return jsonify({"error": "Invalid JSON response"}), 500


@poke_bp.route("/species/<name>", methods=["GET"])
def get_pokemon_species(name):
    name = request.args.get("name")
    response = requests.get(f"https://pokeapi.co/api/v2/pokemon-species/{name}")
    return response.json()


@poke_bp.route("/", methods=["GET"])
def get_pokemon_list():
    response = requests.get("https://pokeapi.co/api/v2/pokemon")
    return response.json()
