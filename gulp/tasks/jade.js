var gulp = require('gulp');
var jade = require('gulp-jade');
var config = require('../config').jade;

gulp.task('jade', function () {
  gulp.src(config.src)
    .pipe(jade({ pretty: true }))
    .pipe(gulp.dest(config.dest));
});
