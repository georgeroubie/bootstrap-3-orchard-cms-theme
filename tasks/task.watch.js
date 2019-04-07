var gulp = require('gulp'),
    watch = require('gulp-watch'),
    requireDir = require('require-dir');
    browserSync = require('browser-sync');
   
requireDir('./', { recurse: true });

function reload(done) {
    browserSync.reload();
    done();
}

gulp.task('watch', function () {
    // Styles
    gulp.watch([
        './scss/*.scss',
        './scss/*/*.scss',
    ], gulp.series('sass', 'prefix', 'minify-css', function (done) {
        console.log('SCSS compiled and compressed');
        reload(done);
    }));

    // JS
    gulp.watch([
        './js/src/*.js',
        './js/src/*/*.js'
    ], gulp.series('concatApp', 'compressApp', function (done) {
        console.log('JS combined and compressed');
        reload(done);
    }));
});