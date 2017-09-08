module.exports = function(book, page) {
    /**
     * [config: config option]
     * @type {Object}
     */
    var config = book.config.get('pluginsConfig')['page-footer-ex'];

    var wrapIfMarkdown = function(input) {
        if (!config.markdown) {
            return input;
        } else {
            return '{% markdown %}\n' + input + '\n{% endmarkdown %}';
        }
    }
    var copyright = wrapIfMarkdown(config.copyright)
    var updateLabel = wrapIfMarkdown(config.update_label)
    page.content += [
        '<footer class="page-footer-ex">',
            '<div class="page-footer-ex-copyright">',
                copyright,
            '</div>',
            '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
            '<div class="page-footer-ex-footer-update">',
                updateLabel,
                '{{ file.mtime | dateFormat("' + config.update_format + '") }}',
            '</div>',
        '</footer>'
    ].join('\n');
    return page;
}
