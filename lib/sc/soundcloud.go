package sc

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"strings"
)

type I struct {
	cid string
}

const (
	API = "https://api.soundcloud.com"
)

func New(cid string) *I {
	return &I{cid}
}

func (i *I) Favorites(uid int) []interface{} {
	var data []interface{}

	uri := fmt.Sprintf("%s/users/%d/favorites?client_id=%s", API, uid, i.cid)

	req, _ := http.Get(uri)
	byt, _ := ioutil.ReadAll(req.Body)

	json.Unmarshal(artworkToHD(byt), &data)

	return data
}

func artworkToHD(src []byte) []byte {
	str := string(src)
	str = strings.Replace(str, "-large", "-t500x500", -1)
	return []byte(str)
}
