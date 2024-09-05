package router

import (
    "net/http"
    "net/http/httptest"
    "path/filepath"
    "testing"
)

func TestGetAllJokes(t *testing.T) {
    mockFilePath := "/data/data.json"

    var absPath string
    originalAbsPath := absPath
    absPath, _ = filepath.Abs(mockFilePath)
    defer func() { absPath = originalAbsPath }()

    req, err := http.NewRequest("GET", "/jokes", nil)
    if err != nil {
        t.Fatal(err)
    }

    rr := httptest.NewRecorder()
    handler := http.HandlerFunc(GetAllJokes)

    handler.ServeHTTP(rr, req)

    if status := rr.Code; status != http.StatusOK {
        t.Errorf("handler returned wrong status code: got %v want %v",
            status, http.StatusOK)
    }
}

func TestGetSingleJoke(t *testing.T) {
    req, err := http.NewRequest("GET", "/jokes/1", nil)
    if err != nil {
        t.Fatal(err)
    }

    rr := httptest.NewRecorder()
    handler := http.HandlerFunc(GetSingleJoke)

    handler.ServeHTTP(rr, req)

    if status := rr.Code; status != http.StatusOK {
        t.Errorf("handler returned wrong status code: got %v want %v",
            status, http.StatusOK)
    }
}