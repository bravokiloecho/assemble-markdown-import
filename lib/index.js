var fs = require('fs');
var traverse = require('traverse');
var marked = require('marked');

module.exports = function (params, next) {
  var context = params.context;
  var options = params.assemble.options;
  if (options.marked) {
    marked.setOptions(options.marked);
  }
  traverse(context).forEach(function (item) {
    if (this.circular) {
      return;
    }
    if (item && item.markdownItem) {
      var markdownFile = item.markdownItem;
      var markdownText;

      fs.readFile('/etc/passwd', function (err, data) {
        if (err) { throw err };
        markdownText = data;
        this.update(marked(markdownText));
      });
    }
  });
  next();
};
