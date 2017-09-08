Page Footer EX for Gitbook
==============

> A minimalist footer for Gitbook.

### 插件风格

极简

![Demo of footer](https://raw.githubusercontent.com/zq99299/gitbook-plugin-page-footer-ex/master/doc/images/gitbook-plugin-page-footer-ex-demo.jpg)

### 本插件的功能 / Features

定制页脚 / Customization

1. 版权信息 / Copyright Information
2. 文档更新时间 / Document update time

### 致敬 / Credit

本插件修改至 / forked from

1. https://github.com/zhj3618/gitbook-plugin-tbfed-pagefooter

修改原因：原插件的信息不能完全自定义。

### Usage

Add it to your `book.json`:

```json
{
    "plugins": [
        "page-footer-ex"
    ],
    "pluginsConfig": {
        "page-footer-ex": {
            "copyright": "By <em>author name</em>",
            "markdown": false,
            "update_label": "<i>updated</i>",
            "update_format": "YYYY-MM-DD HH:mm:ss",
        }
    }
}
```

### Configuration Properties

```json
{
      "copyright": {
        "type": "string",
        "default": "© All Rights Reserved",
        "title": "你的版权信息",
        "description": "Copyright text"
      },
      "markdown": {
        "type": "boolean",
        "default": false,
        "title": "",
        "description": "Default false for plain text/HTML, true to parse copyright and update_label as Markdown"
      },
      "update_label": {
        "type": "string",
        "default": "updated",
        "title": "文档更新时间标签内容",
        "description": "Date label"
      },
      "update_format": {
        "type": "string",
        "default": "YYYY-MM-DD HH:mm:ss",
        "title": "时间格式",
        "description": "Moment.js date format"
      }
}
```

### Update record

#### v0.0.4 2017-02-17

1. 页脚在pdf中显示不美观，在版权信息和更新时间信息中间增加10个空格。
只有在插件css不被调用的时候，这个空格会影响格式。达到分离的效果。在正常网站上观看不会出现这种问题
2. 修改默认配置参数

#### 2017-02-07

完成开发。


