import pytest
from ..app import create_app

def test_root(client):
    response = client.get("/")
    assert response.status_code == 200
    assert response.json == {"message": "hello you can search pokemon here"}
