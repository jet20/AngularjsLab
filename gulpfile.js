var gulp = require('gulp');

var paths = {
	noderoot: './node_modules/',
    libroot: "./public/lib/"
};

gulp.task('libs', function () {
    var libs = [
        'jquery',
        'angular',
        'angular-animate',
        'angular-sanitize',
        'angular-ui-bootstrap',
        '@uirouter',
        'ui-select',
        'bootstrap'
    ];
    var folders = [];
    for (var i = 0; i < libs.length; i++) {
        folders.push(paths.noderoot + libs[i] + '/**/*');
    }
    return gulp.src(folders, {base: paths.noderoot})
        .pipe(gulp.dest(paths.libroot));
});