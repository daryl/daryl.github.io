
import brsfy from 'gulp-browserify'
import rename from 'gulp-rename';
import babel from 'babelify';
import gulp from 'gulp';

gulp.task('js', () => {
  const name = rename('bundle.js');
  const opts = {transform: babel};
  const dist = gulp.dest('dist');
  const src = './src/index.js';

  return gulp.src(src)
    .pipe(brsfy(opts))
    .pipe(name)
    .pipe(dist);
});

