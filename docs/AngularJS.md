AngularJS
=======================================================================================================================

AngularJS的核心价值
-----------------------------------------------------------------------------------------------------------------------
- 数据驱动
- 声明式编程
- 模块化及概念分离
- 可测试性

AngularJS的资源
-----------------------------------------------------------------------------------------------------------------------
http://ngmodules.org
http://egghead.io


AngularJS的特性
-----------------------------------------------------------------------------------------------------------------------
1. MVVM
1. 模块化
1. 可测试性
1. 概念独立性


AngularJS哲学
-----------------------------------------------------------------------------------------------------------------------
1. 数据驱动
1. 声明式编程
1. 概念分离
1. 依赖注入
1. 可扩展性
1. 可测试性

AngularJS 模块
-----------------------------------------------------------------------------------------------------------------------
模块可以定义自己的
模块可以依赖别的模块，访问被依赖模块的的函数，控制器和服务等
ng-app指令根据模块名来启动应用模块


Angular 表单
-----------------------------------------------------------------------------------------------------------------------

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
		



