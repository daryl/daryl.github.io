
import cssnext from 'postcss-cssnext';
import postcss from 'gulp-postcss';
import rename from 'gulp-rename';
import gulp from 'gulp';

gulp.task('css', () => {
  const src = './src/css/index.css';
  const name = rename('bundle.css');
  const dist = gulp.dest('static');

  const opts = [
    cssnext(),
  ];

  return gulp.src(src)
    .pipe(postcss(opts))
    .pipe(name)
    .pipe(dist);
});

