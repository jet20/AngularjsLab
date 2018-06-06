# AngularJS

来自《AngularJS入门和进阶》

- AngularJS简介
- nodejs
	- node
		- 官网: https://nodejs.org/zh-cn/
		- 安装 node: 截止到2018-5-31（六一前一天）官方推荐版本： 8.11.2
	- npm
		- 安装 node自动安装npm。当前版本: 5.6.0
		- [安装 cnpm](https://npm.taobao.org/)
			- 由于npm在国外，经常连接不到。 所以安装cnpm。
			- npm install cnpm --registry=https://registry.npm.taobao.org -g 
		- npm 指令
	- bower
		- bower已经不维护了，但一些项目还可能用到。
		- bower 指令
			- init
			- install
			- uninstall
			- list
			- info
			- search
			- update
	- gulp及插件
		- 安装 gulp
			- npm i gulp --save-dev

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
- 入门指南: https://code.angularjs.org/1.7.0/docs/tutorial


AngularJS简介
-----------------------------------------------------------------------------------------------------------------------

- soruce： https://github.com/angular/angular.js.git
- homepage: https://code.angularjs.org
- npm: npm i angular(1.7.0)
- bower: bower install angular
- sublime text 3 plugins


npm
-----------------------------------------------------------------------------------------------------------------------
## npm 指令
- help
- init
- install
- uninstall	
- rm
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


gulp
-----------------------------------------------------------------------------------------------------------------------

官网 https://gulpjs.com/







## bower 指令
- init
- install
- uninstall
- list
- info
- search
- update


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
 