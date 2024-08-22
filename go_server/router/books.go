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

func GetAllBooksHandler(w http.ResponseWriter, r *http.Request) {
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

	books := data.Books

	jsonBooks, err := json.Marshal(books)
	if err != nil {
		http.Error(w, "Error marshalling books", http.StatusInternalServerError)
		return
	}

	w.Write(jsonBooks)

	defer jsonFile.Close()
}

func GetSingleBook(w http.ResponseWriter, r *http.Request) {
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

	books := data.Books
	vars := mux.Vars(r)
	book := books[vars["id"]]

	jsonBook, err := json.Marshal(book)

	if err != nil {
		http.Error(w, "Error marshalling book", http.StatusInternalServerError)
		return
	}

	w.Write(jsonBook)

	defer jsonFile.Close()
}
