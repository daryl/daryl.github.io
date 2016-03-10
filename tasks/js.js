
import brsfy from 'gulp-browserify'
import rename from 'gulp-rename';
import babel from 'babelify';
import gulp from 'gulp';

gulp.task('js', () => {
  const dist = gulp.dest('static');
  const name = rename('bundle.js');
  const opts = {transform: babel};
  const src = './src/client.js';

  return gulp.src(src)
    .pipe(brsfy(opts))
    .pipe(name)
    .pipe(dist);
});

