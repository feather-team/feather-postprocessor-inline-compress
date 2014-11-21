'use strict';

var INLINE_COMPRESS_REG = /(<(script|style)[\s\S]+?)\bfeather-inline-compress\b([\s\S]*?>)([\s\S]*?)<\/\2>/g;
var ug = require('fis-optimizer-uglify-js'), clean = require('fis-optimizer-clean-css');

module.exports = function (content, file, conf){
    if(file.isHtmlLike){
        var tmp;

        content = content.replace(INLINE_COMPRESS_REG, function(_0, _1, _2, _3, _4){
            if(_2 == 'script'){
                _4 = ug(_4, file, {});
            }else{
                _4 = clean(_4, file, {});
            }

            return _1 + _3 + _4 + '</' + _2 + '>';
        });
    }

    return content;
}