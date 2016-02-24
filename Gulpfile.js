'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('scss', () => {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('build', () => {
  gulp.src('dist/**/*.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false,
    }))
    .pipe(cssmin())
    .pipe(concat('main.min.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', () => {
  gulp.watch('./scss/**/*.scss', ['scss']);
});
