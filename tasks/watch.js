
import rename from 'gulp-rename';
import gulp from 'gulp';

gulp.task('watch', (fn) => {
  const css = ['src/**/*.css'];
  const js = ['src/**/*.js'];

  gulp.start('css');
  gulp.start('js');

  gulp.watch(css, ['css']);
  gulp.watch(js, ['js']);

  fn();
});

