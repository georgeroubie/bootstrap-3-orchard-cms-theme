var gulp = require('gulp'),
    requireDir = require('require-dir');
   
requireDir('./', { recurse: true });

gulp.task('initialize', gulp.series(
    // Compress Images
    'minify-img',
    // Generate Favicon for multiple devices
    'favicon',
    // Copy fonts from node_modules
    'bootstrap-fonts',
    'fontawesome-fonts',
    // SASS compiling, autoprefixing, compressing
    'sass',
    'prefix',
    'minify-css',
    // Generate the JS Files
    'concatLib',
    'compressLib',
    'concatApp',
    'compressApp',
    'watch',
    function (done) { console.log('Application Initialized') }
));