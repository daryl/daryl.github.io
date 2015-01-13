package main

import (
	"github.com/daryl/cash"
	"github.com/daryl/daryl/lib/gh"
	"github.com/daryl/daryl/lib/sc"
	"html/template"
	"net/http"
	"os"
	"strings"
	"time"
)

type Page struct {
	SC, GH []interface{}
}

var (
	GH  *gh.I
	SC  *sc.I
	mux *http.ServeMux
	tpl *template.Template
	C   *cash.Cash
)

var fnc = template.FuncMap{
	"year": func() string {
		return time.Now().Format("2006")
	},
}

func main() {
	mux = http.NewServeMux()

	C = cash.New(cash.Conf{
		3 * 60 * time.Minute, -1,
	})

	GH = gh.New()
	SC = sc.New(os.Getenv("SCID"))

	tpl = template.New("index.html").Funcs(fnc)
	tpl = template.Must(tpl.ParseGlob("app/views/*.html"))

	mux.Handle("/", http.FileServer(http.Dir("./public")))
	http.HandleFunc("/", handler)

	http.ListenAndServe(
		":"+os.Getenv("PORT"),
		nil,
	)
}

func handler(w http.ResponseWriter, r *http.Request) {
	if strings.ContainsRune(r.URL.Path, '.') {
		mux.ServeHTTP(w, r)
		return
	}

	if r.URL.Path != "/" {
		handle404(w, r)
		return
	}

	tpl.Execute(w, data())
}

func handle404(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(404)
	t, _ := template.ParseFiles("app/views/404.html")
	t.Execute(w, nil)
}

func data() *Page {
	if v, ok := C.Get("data"); ok {
		return v.(*Page)
	}

	data := &Page{SC.Favorites(38834112)[:6], GH.Repos("daryl")}

	C.Set("data", data, 0)

	return data
}
