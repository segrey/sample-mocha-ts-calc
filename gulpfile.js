var gulp = require('gulp')
  , typescript = require('gulp-tsc')
  , del = require('del');

gulp.task('default', ['clean', 'compile']);

gulp.task('clean', function () {
  return del('dist/');
});

gulp.task('compile', function () {
  gulp.src(['lib/**/*.ts', 'spec/**/*.ts'])
    .pipe(typescript({
      module: 'commonjs',
      sourceMap: true,
      outDir: 'dist/'
    }))
    .pipe(gulp.dest('dist/'))
});
