AngularJS
=======================================================================================================================

- AngularJS 概述
- 基本指令和控制器
- 单元测试
- 表单
- 服务
- 服务器通讯
- 服务及XHR的单元测试
- 过滤器
- 过滤器单元测试
- ngRoute
- 指令
- 指令单元测试
- 进阶指令
- e2e
- AngularJS编码规范

AngularJS的资源
-----------------------------------------------------------------------------------------------------------------------
- 官网 http://docs.angularjs.org
- api http://docs.angularjs.org/api
- 开发指南 http://docs.angularjs.org/guide
- 教程 http://docs.angularjs.org/tutorial
- 模块 http://ngmodules.org
- 视频 http://egghead.io


AngularJS 概述
=======================================================================================================================
- AngularJS哲学
- 安装AngularJS


AngularJS哲学
-----------------------------------------------------------------------------------------------------------------------
1. 数据驱动
2. 声明式编程(通过指令实现)
3. 概念分离(MVVW模式)
4. 依赖注入
5. 可扩展性(指令、服务等)
6. 可测试性


安装AngularJS
-----------------------------------------------------------------------------------------------------------------------
- npm
	- npm i angular
- bower
	- bower install angular


基本指令和控制器
=======================================================================================================================

AngularJS 模块
-----------------------------------------------------------------------------------------------------------------------
- 模块可以定义自己的控制器、服务、工厂类以及指令。
- 模块可以依赖别的模块，访问被依赖模块的的函数，控制器和服务等
- ng-app指令根据模块名来启动应用模块


$scope vs controllerAs
-----------------------------------------------------------------------------------------------------------------------
$scope == controller 吗？

this
-----------------------------------------------------------------------------------------------------------------------
You don't know js: this & object prototypes

Angular执行流程
-----------------------------------------------------------------------------------------------------------------------
1. 加载HTML和脚本
2. 加载完毕，AngularJS查找ng-app指令
3. 加载ng-app对应的模块，关联模块和相关元素
4. 在ng-app对应的根节点下，查找指令和数据绑定语句
5. 为ng-controller和ng-repeat创建作用率(scope)
6. 为HTML访问到的变量添加watcher和listener


等待AngularJS加载完毕
-----------------------------------------------------------------------------------------------------------------------
- 不用{{}}, 而是用ng-bind
- 使用ng-cloak隐藏UI


AngularJS指令
-----------------------------------------------------------------------------------------------------------------------
- ng-app
- ng-controller
- ng-bind
- ng-repeat
	- 数组 item in array [track by item.id]
	- 对象 (key, value) in object
	- bool: $first/$middle/$last/$odd/$even
	- int: $index
	- $$hashKey
- ng-repeat-start/ng-repeat-end	
- ng-class
- ng-show/ng-hide


Angular 表单
=======================================================================================================================

### 动手
1. [x] 用户名
2. [x] 增加密码
3. [x] 表单
4. [x] 验证
5. [x] 显示错误信息
6. [x] 表单样式
7. [ ] 内嵌表单
8. [ ] 其他表单范例
	- [ ] textarea
	- [ ] checkbox
		- [ ] ng-true-value/ng-false-vlaue
		- [ ] ng-checked
	- [ ] radio
	- [ ] combo boxes/drop-downs/select

### ng-model

Angular 表单状态属性
-----------------------------------------------------------------------------------------------------------------------
- $invalid / $valid
- $pristine / $dirty
- $error

Angular 内置的验证器
-----------------------------------------------------------------------------------------------------------------------
- required | ng-required
- ng-minlength / ng-maxlength
- ng-pattern
- type="email|date|number|url"


Angular 表单状态CSS class
-----------------------------------------------------------------------------------------------------------------------
- $invalid/$valid : ng-invalid/ng-valid
- $pritine/$dirty : ng-valid/ng-dirty


Angular 输入控件CSS class
- $invalid/$valid : ng-invalid/ng-valid
- $pritine/$dirty : ng-valid/ng-dirty
- required: ng-required-valid/ng-required-invalid
- min: ng-min-valid/ng-min-invalid
- max: ng-max-valid/ng-max-invalid
- minlength: ng-minlength-valid/ng-minlength-invalid
- maxlength: ng-maxlength-valid/ng-maxlength-invalid
- pattern: ng-pattern-valid/ng-pattern-invalid
- url: ng-url-valid/ng-url-invalid
- email: ng-email-valid/ng-email-invalid
- date: ng-date-valid/ng-date-invalid
- number: ng-number-valid/ng-number-invalid

AngularJS 推荐做法
-----------------------------------------------------------------------------------------------------------------------

- TDD 测试驱动开发
	- 单元测试： 
		- 专注于单个模块(控制器、服务、过滤器等)
		- Karma和Jasminne
	- 集成测试
		- 测试其他模块是否正常配置并运行
		- 测试服务的异常流程是否符合预期并返回了正确的结果
		- 仍然需要模拟XHR请求
	- 场景测试
		



