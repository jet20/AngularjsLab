gulp
=======================================================================================================================

安装 gulp
-----------------------------------------------------------------------------------------------------------------------

### 全局
```shell
npm i gulp-cli -g
```

### 项目
```shell
npm i gulp --save-dev -d
```

gulp 任务模板
-----------------------------------------------------------------------------------------------------------------------

```javascript
var gulp = require('gulp');

gulp.task('default', function() {
  // place code for your default task here
});
```

gulp 使用
-----------------------------------------------------------------------------------------------------------------------

```shell
gulp
gulp default
```

插件
-----------------------------------------------------------------------------------------------------------------------
- gulp-changed
- gulp-plumber
- jshint
- uglify
- gulp-imagemin
- less
- scss
- browser-sync

gulp-changed
-----------------------------------------------------------------------------------------------------------------------

### 安装
```shell
npm install --save-dev gulp-changed
```

### 使用
```javascript
const gulp = require('gulp');
const changed = require('gulp-changed');
const ngAnnotate = require('gulp-ng-annotate'); // Just as an example
 
const SRC = 'src/*.js';
const DEST = 'dist';
 
gulp.task('default', () =>
    gulp.src(SRC)
        .pipe(changed(DEST))
        // `ngAnnotate` will only get the files that
        // changed since the last time it was run
        .pipe(ngAnnotate())
        .pipe(gulp.dest(DEST))
);
```

```javascript
gulp.task('jade', () =>
    gulp.src('src/**/*.jade')
        .pipe(changed('app', {extension: '.html'}))
        .pipe(jade())
        .pipe(gulp.dest('app'))
);
```

gulp-plumber
-----------------------------------------------------------------------------------------------------------------------

### 安装
```shell
npm install --save-dev gulp-plumber
```

### 使用
```javascript
var plumber = require('gulp-plumber');
var coffee = require('gulp-coffee');
 
gulp.src('./src/*.ext')
    .pipe(plumber())
    .pipe(coffee())
    .pipe(gulp.dest('./dist'));
```
