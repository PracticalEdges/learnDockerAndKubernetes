package models

type Data struct {
    Books map[string]string `json:"books"`
    Jokes map[string]string `json:"jokes"`
}