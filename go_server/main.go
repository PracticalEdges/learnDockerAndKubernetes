package main

import (
	"goserver/router"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func homeHandler(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("This is the server"))
}

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/", homeHandler).Methods("GET")
	log.Println("Server started on port 8080")

	// books routes
	r.HandleFunc("/books", router.GetAllBooksHandler).Methods("GET")
	r.HandleFunc("/books/{id}", router.GetSingleBook).Methods("GET")

	// Jokes routes
	r.HandleFunc("/jokes", router.GetAllJokes).Methods("GET")
	r.HandleFunc("/jokes/{id}", router.GetSingleJoke).Methods("GET")

	log.Fatal(http.ListenAndServe(":8080", r))
}
