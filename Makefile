
TS := $$(date +%H:%M:%S)

wjs:
	@fswatch-run src/**/*.js 'make html'

wcss:
	@fswatch-run src/css 'make css'

css:
	@cssnext -c src/css/index.css > dist/bundle.css
	@echo ${TS} bundle.css

html:
	@babel-node build.js
	@echo ${TS} index.html

