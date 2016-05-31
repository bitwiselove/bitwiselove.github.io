const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

gulp.task('scss', () => {
  gulp.src('scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('compiled.css'))
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('scss:watch', () => {
  gulp.watch('scss/**/*.scss', ['scss']);
});
