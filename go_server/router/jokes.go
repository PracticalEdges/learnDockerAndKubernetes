package router

import (
	"encoding/json"
	"goserver/models"
	"io"
	"log"
	"net/http"
	"os"
	"path/filepath"

	"github.com/gorilla/mux"
)

func GetAllJokes(w http.ResponseWriter, r *http.Request) {
	r.Header.Set("Content-Type", "application/json")
	w.Header().Set("Content-Type", "application/json")

	absPath, err := filepath.Abs("./data/data.json")
	if err != nil {
		log.Println(err)
		http.Error(w, "Error getting absolute path", http.StatusInternalServerError)
		return
	}

	jsonFile, err := os.Open(absPath)
	if err != nil {
		log.Println(err)
		http.Error(w, "Error opening file", http.StatusInternalServerError)
		return
	}

	byteValue, err := io.ReadAll(jsonFile)
	if err != nil {
		http.Error(w, "Error reading file", http.StatusInternalServerError)
		return
	}

	var data models.Data
	err = json.Unmarshal(byteValue, &data)
	if err != nil {
		http.Error(w, "Error unmarshalling json", http.StatusInternalServerError)
		return
	}

	jokes := data.Jokes

	jsonJokes, err := json.Marshal(jokes)
	if err != nil {
		http.Error(w, "Error marshalling jokes", http.StatusInternalServerError)
		return
	}

	w.Write(jsonJokes)

	defer jsonFile.Close()
}

func GetSingleJoke(w http.ResponseWriter, r *http.Request) {
	r.Header.Set("Content-Type", "application/json")
	w.Header().Set("Content-Type", "application/json")

	absPath, err := filepath.Abs("./data/data.json")
	if err != nil {
		log.Println(err)
		http.Error(w, "Error getting absolute path", http.StatusInternalServerError)
		return
	}

	jsonFile, err := os.Open(absPath)
	if err != nil {
		log.Println(err)
		http.Error(w, "Error opening file", http.StatusInternalServerError)
		return
	}

	byteValue, err := io.ReadAll(jsonFile)
	if err != nil {
		http.Error(w, "Error reading file", http.StatusInternalServerError)
		return
	}

	var data models.Data
	err = json.Unmarshal(byteValue, &data)
	if err != nil {
		http.Error(w, "Error unmarshalling json", http.StatusInternalServerError)
		return
	}

	jokes := data.Jokes

	vars := mux.Vars(r)
	joke := jokes[vars["id"]]

	jsonJoke, err := json.Marshal(joke)

	if err != nil {
		http.Error(w, "Error marshalling joke", http.StatusInternalServerError)
		return
	}

	w.Write(jsonJoke)

	defer jsonFile.Close()
}
