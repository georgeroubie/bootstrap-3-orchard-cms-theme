var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('prefix', function () {
    return gulp.src('./css/styles.css')
        .pipe(autoprefixer())
        .pipe(gulp.dest('./css'))
});