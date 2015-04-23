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
    
    if (item && item.markdownFile && !item._markdownRendered) {
      var markdownFile = item.markdownFile;   
      
      var markdownText = fs.readFileSync(markdownFile, 'utf8');
      var html = marked( markdownText );
      
      item.markdownFile = html;
      item._markdownRendered = true;
    }

  });
  next();
};