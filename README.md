AngularJSLab
-----------------------------------------------------------------------------------------------------------------------

# AngularJS的内容

来自《AngularJS入门和进阶》

- 简介
	- soruce： https://github.com/angular/angular.js.git
	- homepage: https://code.angularjs.org
	- npm: npm i angular(1.7.0)
	- bower: bower install angular
	- sublime text 3 plugins
- nodejs
	- node
		- [安装 node](#user-content-安装-node)
	- npm
		- [安装 npm](#user-content-安装-npm)
		- [安装 cnpm](#user-content-安装-cnpm)
		- [npm 指令](#user-content-npm-指令)
	- [bower](#user-content-bower)
		- [bower 指令](#user-content-bower-指令)
	- gulp及插件
		- 安装 gulp
		- jshint
		- uglify
		- gulp-changed
		- gulp-plumber
		- gulp-imagemin
		- less
		- scss
		- browser-sync
	- test
- 数据绑定
- 控制器
- 模块
- 作用域
- 路由
- 表单
- 指令
- Services
- 过滤器
- 依赖注入
- 动画
- Cookie
- Promise
- UI
	- [angular-ui](http://angular-ui.github.io)
		- [Sublime plugins](https://github.com/angular-ui/AngularJS-sublime-package)
		- [UI Bootstrap](https://angular-ui.github.io/bootstrap/)
			- 安装 UI Bootstrap

- 扩展
- 案例


## 安装 node
截止到2018-5-31（六一前一天）官方推荐版本： 8.11.2

## 安装 npm
安装 node自动安装npm。当前版本: 5.6.0


## 安装 cnpm
由于npm在国外，经常连接不到。 所以安装cnpm。

```shell
npm install cnpm --registry=https://registry.npm.taobao.org -g 
```

## npm 指令
- help
- init
- install
- uninstall	
- search
- info
- update
- list(ls)
- search(s,se,find)
- config
- start
- stop
- restart
- test

## bower
bower已经不维护了，但一些项目还可能用到。


## bower 指令
- init
- install
- uninstall
- list
- info
- search
- update


## 安装 gulp

```shell
npm i gulp -gd 
npm i gulp --save-dev -d
```

# jshint

[官网](http://jshint.com)

## 安装 jshint

```shell
npm i jshint -gd 
npm i jshint -d --save-dev
```

## 使用 jshint

安装 gulp-jshint

```shell
npm i gulp-jshint -gd
npm i gulp-jshint --save-dev -d
```

### uglify

uglify用于压缩代码的。 安装 uglify

```shell
npm i uglify-js -gd
npm i uglify-js --save-dev -d
```

安装 gulp-uglify

```shell
npm i gulp-uglify -gd
npm i gulp-uglify --save-dev -d
```

### gulp-changed

gulp-changed是用于监控文件变化后，自动执行任务的。 安装 gulp-changed

```shell
npm i gulp-changed -gd
npm i gulp-changed --save-dev -d	
```

### gulp-plumber

gulp-plumber 是异常处理的。 安装 gulp-plumber 

```shell
npm i gulp-plumber -gd
npm i gulp-plumber --save-dev -d	
```

### gulp-imagemin

gulp-imagemin是压缩图像的。 安装 gulp-imagemin

```shell
npm i gulp-imagemin -gd
npm i gulp-imagemin --save-dev -d
```

### less

安装 less

```shell
npm i less -gd
npm i less --save-dev -d
```

安装 	gulp-less
```shell
npm i gulp-less -gd
npm i gulp-less --save-dev -d
```

### scss
- [ ] 安装 gulp-scss

### browser-sync

安装 browser-sync

```shell
npm i browser-sync -gd
npm i browser-sync --save-dev -d
```

把browser-sync安装在项目中，就可以直接可以在gulp中使用browser-sync了。

## test
- Jasmine
- Karma
- 其他
	- [ ] Mocha
	- [ ] QUnit

### Jasmine
Jasmine安装
```shell
npm i jasmine -gd 
```

Jasmine指令
- help
- init

### Karma
Karma 安装
```shell
npm i karma -gd 
```
			
# 数据绑定
		ng-model
		ng-bind
		表达式
		ng-bind和表达式的区别	



# 	Services
		Service
			内置Service
				$interval
					计时器
		Factory
		Provider

# UI
		angular-ui.github.io
		IDE 插件
		ui-bootstrap
			安装
				demo
					https://angular-ui.github.io/bootstrap/
				bower
					bower 版本低
					bower install angular-bootstrap --save
				npm
					npm i angular-ui-bootstrap --save
			alert

# 扩展
		Chart
			Chart.js
			bower install angular-chart.js --save
			柱状图
			曲线图
			饼状图
		Videogular

# Angular UI

## UI Bootstrap

### 安装 UI Bootstrap
```shell
npm i angular-ui-bootstrap
```


### UI Bootstrap 文件和依赖
 