var gulp = require('gulp');

var basePaths = {
    src: {
        nodeModules: './node_modules'
    },
    dest: {
        rootFonts: './fonts'
    }
};

var libPaths = {
    src: {
        fonts: {
            bootstrap: `${basePaths.src.nodeModules}/bootstrap-sass/assets/fonts/bootstrap/*.*`,
            fontawesome: `${basePaths.src.nodeModules}/font-awesome/fonts/*.*`
        }
    }
};

gulp.task('bootstrap-fonts', function () {
    return gulp.src(libPaths.src.fonts.bootstrap).pipe(gulp.dest(basePaths.dest.rootFonts));
});

gulp.task('fontawesome-fonts', function () {
    return gulp.src(libPaths.src.fonts.fontawesome).pipe(gulp.dest(basePaths.dest.rootFonts));
});