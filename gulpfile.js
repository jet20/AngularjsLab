var gulp = require('gulp');

var paths = {
    noderoot: './node_modules/',
	bowerroot: './bower_components/',
    libroot: "./lib/"
};

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

gulp.task('libs:moment', function () {
    return npmLib('moment');
});


gulp.task('default', ['libs:jquery'
    , 'libs:bootstrap'
    , "libs:angular"
    , 'libs:angular-animate'
    , 'libs:angular-sanitize'
    , 'libs:moment'
]);