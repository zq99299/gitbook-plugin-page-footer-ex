Math integration with GitBook
==============

### 插件效果
* 风格：极简
* 效果图
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
		"page-footer-ex":{
            "copyright":"mrcode.cn",
            "update_label":"update: ",
            "update_format":"YYYY-MM-DD HH:mm:ss"
        }
  }	
}
```
- page-footer-ex ： 你的版权信息，可以是html
- update_label ： 文档更新时间标签，可以是html
- update_format ： 时间格式

以上三个值都有默认值。
 
### or Install locally

```
$ npm install gitbook-plugin-page-footer-ex --save
```

>open npm : https://www.npmjs.com/package/gitbook-plugin-page-footer-ex

### Update record
#### 2017-02-07
- 完成开发。
- 文档修正

### 承诺
只要自己还在使用。就会不断完善

