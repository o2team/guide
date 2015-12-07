'use strict';
var cheerio;

function bsTOC(str, options) {
  options = options || {};

  if (!cheerio) cheerio = require('cheerio');

  var $ = cheerio.load(str);
  var headings = $('h1, h2, h3, h4, h5, h6');

  if (!headings.length) return '';

  var className = options.class || 'nav';
  var listNumber = options.hasOwnProperty('list_number') ? options.list_number : true;
  var result = '<ul class="' + className + ' toc-nav">';
  var lastNumber = [0, 0, 0, 0, 0, 0];
  var firstLevel = 0;
  var lastLevel = 0;
  var i = 0;

  headings.each(function() {
    var level = +this.name[1];
    var id = $(this).attr('id');
    var text = $(this).text();

    lastNumber[level - 1]++;

    for (i = level; i <= 5; i++) {
      lastNumber[i] = 0;
    }

    if (firstLevel) {
      for (i = level; i < lastLevel; i++) {
        result += '</li></ul>';
      }

      if (level > lastLevel) {
        result += '<ul class="' + className + ' '+ className + '-child">';
      } else {
        result += '</li>';
      }
    } else {
      firstLevel = level;
    }

    result += '<li class="' + className + '-item ' + className + '-level-' + level + '">';
    result += '<a class="' + className + '-link" href="#' + id + '">';

    if (listNumber) {
      result += '<span class="' + className + '-number">';

      for (i = firstLevel - 1; i < level; i++) {
        result += lastNumber[i] + '.';
      }

      result += '</span> ';
    }

    result += '<span class="' + className + '-text">' + text + '</span></a>';

    lastLevel = level;
  });

  for (i = firstLevel - 1; i < lastLevel; i++) {
    result += '</li></ul>';
  }

  return result;
};
/**
 * boostrap scrollspy compatible toc
 */
hexo.extend.helper.register('bstoc', function(str, opts){
  return bsTOC(str, opts);
});
