package gh

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
)

type I struct{}

const (
	API = "https://api.github.com"
)

func New() *I {
	return &I{}
}

func (_ *I) Repos(user string) []interface{} {
	var data []interface{}

	uri := fmt.Sprintf("%s/users/%s/repos?sort=pushed", API, user)

	req, _ := http.Get(uri)
	byt, _ := ioutil.ReadAll(req.Body)

	json.Unmarshal(byt, &data)

	return data
}
