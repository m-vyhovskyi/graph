var gulp = require('gulp');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var path = require('path');

    var paths = {
        es6: ['src/**/*.js'],
        es5: 'bin',
        // Must be absolute or relative to source map
        sourceRoot: path.join(__dirname, 'bin'),
    };
    gulp.task('babel', function () { // (A)
        return gulp.src(paths.es6)
            .pipe(sourcemaps.init()) // (B)
            .pipe(babel())
            .pipe(sourcemaps.write('.', // (C)
                { sourceRoot: paths.sourceRoot }))
            .pipe(gulp.dest(paths.es5));
    });    gulp.task('watch', function() { // (D)
        gulp.watch(paths.es6, ['babel']);
    });
    gulp.task('default', ['watch']); // (E)
