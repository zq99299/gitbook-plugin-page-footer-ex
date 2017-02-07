var _start = require('./assets/lib/plugin');
var moment = require('moment');

module.exports = {
    book: {
        assets: "./assets",
        css: ["style/plugin.css"]
    },
    hooks: {
        'page:before': function (page) {
            var bookIns = this;
            _start(bookIns, page);
            return page;
        }
    },
    filters: {
        dateFormat: function (d, format) {
            return moment(d).format(format)
        }
    }
};