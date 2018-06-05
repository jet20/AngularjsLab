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

function npmLib(libName) {
    return gulp.src(paths.noderoot + libName + "/**/*")
        .pipe(gulp.dest(paths.libroot + libName));
}

function bowerLib(libName) {
    return gulp.src(paths.bowerroot + libName + "/**/*")
        .pipe(gulp.dest(paths.libroot + libName));
}

gulp.task('libs:jquery', function () {
    return npmLib('jquery');
});

gulp.task('libs:bootstrap', function () {
    return npmLib('bootstrap');
});

gulp.task('libs:angular', function () {
    return npmLib('angular');
});

gulp.task('libs:angular-animate', function () {
    return npmLib('angular-animate');
});

gulp.task('libs:angular-sanitize', function () {
    return npmLib('angular-sanitize');
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

gulp.task('libs', ['libs:jquery', 'libs:bootstrap', "libs:angular"]);