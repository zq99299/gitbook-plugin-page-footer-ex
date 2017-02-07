Math integration with GitBook
==============
### 本插件的功能：
定制页脚
1. 版权信息
2. 文档更新时间

### 致敬
本插件修改至
1. https://github.com/zhj3618/gitbook-plugin-tbfed-pagefooter

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
			"page-footer-ex":"你的版权信息",
			"update_label":"更新标签",
			"update_format":"时间格式如：YYYY-MM-DD HH:mm:ss",
		}	   
  }	
}
```
 
### or Install locally

```
$ npm install gitbook-plugin-page-footer-ex --save
```

>open npm : https://www.npmjs.com/package/page-footer-ex

### Update record
#### 2017-02-07

