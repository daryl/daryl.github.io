package main

import (
	"io/ioutil"
	"net/http"
	"os"
	"path/filepath"
	"strings"
)

var (
	mux *http.ServeMux
	tpl = map[string][]byte{}
)

func main() {
	mux = http.NewServeMux()

	filepath.Walk("app/views", cacheViews)

	mux.Handle("/", http.FileServer(http.Dir("./public")))
	http.HandleFunc("/", handler)

	http.ListenAndServe(":"+os.Getenv("PORT"), nil)
}

func handler(w http.ResponseWriter, r *http.Request) {
	if strings.ContainsRune(r.URL.Path, '.') {
		mux.ServeHTTP(w, r)
		return
	}

	if r.URL.Path != "/" {
		w.WriteHeader(404)
		w.Write(tpl["404"])
		return
	}

	w.Write(tpl["index"])
}

func cacheViews(fp string, fi os.FileInfo, err error) error {
	if err != nil || fi.IsDir() {
		return nil
	}

	if strings.HasSuffix(fp, "html") {
		tpl[stripViewPath(fp)], _ = ioutil.ReadFile(fp)
	}

	return nil
}

func stripViewPath(path string) string {
	path = strings.TrimPrefix(path, "app/views/")
	return strings.TrimSuffix(path, ".html")
}
