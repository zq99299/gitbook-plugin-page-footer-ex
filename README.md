Math integration with GitBook
==============

### 插件风格
极简
![image](https://raw.githubusercontent.com/zq99299/gitbook-plugin-page-footer-ex/master/doc/images/gitbook-plugin-page-footer-ex-demo.jpg)

### 本插件的功能：
定制页脚

1. 版权信息
2. 文档更新时间

### 致敬
本插件修改至

1. https://github.com/zhj3618/gitbook-plugin-tbfed-pagefooter
修改原因：原插件的信息不能完全自定义。

### How to use it?

Add it to your `book.json` configuration:

```
{
  "plugins": [
       "page-footer-ex"
  ]
}
```

Install your plugins using:

```
$ gitbook install ./
``` 

### Configuration

You can force the use of svg pre-processed by adding to your book.json:

```
{
 "pluginsConfig": {	   
		"anchor-navigation-ex":{
			"page-footer-ex":"mrcode",
			"update_label":"update",
			"update_format":"YYYY-MM-DD HH:mm:ss",
		}	   
  }	
}
```
- page-footer-ex ： 你的版权信息，可以是html
- update_label ： 文档更新时间标签，可以是html
- update_format ： 时间格式
 
### or Install locally

```
$ npm install gitbook-plugin-page-footer-ex --save
```

>open npm : https://www.npmjs.com/package/gitbook-plugin-page-footer-ex

### Update record

#### v0.0.4 2017-02-17
1. 页脚在pdf中显示不美观，在版权信息和更新时间信息中间增加10个空格。
只有在插件css不被调用的时候，这个空格会影响格式。达到分离的效果。在正常网站上观看不会出现这种问题
2. 修改默认配置参数

#### 2017-02-07
完成开发。


