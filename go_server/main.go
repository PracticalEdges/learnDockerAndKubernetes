package main

import (
	"goserver/router"
	"log"
	"net/http"

	"github.com/gorilla/mux"
	// "goserver/router"
)

func homeHandler(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("This is the server"))
}

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/", homeHandler).Methods("GET")
	log.Println("Server started on port 8080")
	r.HandleFunc("/books", router.GetAllBooksHandler).Methods("GET")

	http.ListenAndServe(":8080", r)
}
