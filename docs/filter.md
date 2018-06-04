# filter(过滤器)

- 内置filter
	- [x] currency
	- [x] number
	- [x] lowercase & uppercase
	- [x] date
	- [x] json
	- [ ] limitTo
	- [ ] orderBy
	- [ ] filter
- [ ] 自定义filter
- [ ] angular-filter
	- [ ] 首字母大写
- [ ] 实现原理和源代码

## currency

默认方式:
- 美元符号
- 2位小数位数(default max fraction size for current locale)
- 千分位分隔符(,), current locale, 不能更改 

| 方式 | 1234567.7654 | 1234567 |
|----|----|----|
| currency | $1,234,567.77 | $1,234,567.00 |
| currency:'￥' | ￥1,234,567.77 | ￥1,234,567.00 |
| currency:'￥':4 | 1,234,567.7654 | ￥1,234,567.0000 |

## number

默认方式:
- 3位小数位数(没人有)
- 千分位分隔符(,), 不能更改 

## date
- Jun 4, 2018

## filter 
返回一个子数组，
```javascript
vm.fitlerName = "x";
{{person in people | filter: vm.filterName}}
```


