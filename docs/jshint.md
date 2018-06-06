JSHint
=======================================================================================================================

官网
-----------------------------------------------------------------------------------------------------------------------
 http://jshint.com


安装
-----------------------------------------------------------------------------------------------------------------------

### 全局
```shell
npm i jshint -gd
```

### 项目
```shell
npm i jshint --save-dev
```

### gulp 插件(gulp-jshint)
```shell
npm i gulp-jshint --save-dev
```

Sublime 编辑器插件
-----------------------------------------------------------------------------------------------------------------------

### Sublime-JSHint
https://github.com/victorporof/Sublime-JSHint

配置
-----------------------------------------------------------------------------------------------------------------------

### .jshintrc

范例: https://github.com/jshint/jshint/blob/master/examples/.jshintrc

```json
{
  // Details: https://github.com/victorporof/Sublime-JSHint#using-your-own-jshintrc-options
  // Example: https://github.com/jshint/jshint/blob/master/examples/.jshintrc
  // Documentation: http://www.jshint.com/docs/
  "browser": true,
  "esnext": true,
  "globals": {},
  "globalstrict": true,
  "quotmark": true,
  "undef": true,
  "unused": true
}
```