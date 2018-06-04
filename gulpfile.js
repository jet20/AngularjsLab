var gulp = require('gulp');

var paths = {
    noderoot: './node_modules/',
	bowerroot: './bower_components/',
    libroot: "./public/lib/"
};

gulp.task('npm:libs', function () {
    var libs = [
        'jquery',
        'angular',
        'angular-animate',
        'angular-sanitize',
        'angular-ui-bootstrap',
        '@uirouter',
        'ui-select',
        'adminbsb-materialdesign',
        'material-design-icons/iconfont',
        'bootstrap-select',
        'bootstrap'
    ];
    var folders = [];
    for (var i = 0; i < libs.length; i++) {
        folders.push(paths.noderoot + libs[i] + '/**/*');
    }
    return gulp.src(folders, {base: paths.noderoot})
        .pipe(gulp.dest(paths.libroot));
});

gulp.task('bower:libs', function () {
    var libs = [
        'ng-bootstrap-select'
    ];
    var folders = [];
    for (var i = 0; i < libs.length; i++) {
        folders.push(paths.bowerroot + libs[i] + '/**/*');
    }
    return gulp.src(folders, {base: paths.bowerroot})
        .pipe(gulp.dest(paths.libroot));
});

gulp.task('libs', ['npm:libs', 'bower:libs']);