# filter(过滤器)

- currency(1234567.7654)
	- 默认: {{ x | currency}} $1,234,567.77
	- 中文: {{ x | currency:'￥'}}
	- 小数位数: {{ x | currency:'￥'：4}}
- number
	- 默认: 精度小于等于3


- filter

- 使用过滤器
- 自定义过滤器
- 实现原理和源代码

## currency

默认方式:
- 美元符号
- 2位小数位数
- 千分位分隔符(,), 不能更改 

| 方式 | 1234567.7654 | 1234567 |
|----|----|----|
| currency | $1,234,567.77 | $1,234,567.00 |
| currency:'￥' | ￥1,234,567.77 | ￥1,234,567.00 |
| currency:'￥':4 | 1,234,567.7654 | ￥1,234,567.0000 |


## filter 
返回一个子数组，
```javascript
vm.fitlerName = "x";
{{person in people | filter: vm.filterName}}
```


