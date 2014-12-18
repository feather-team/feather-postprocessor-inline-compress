'use strict';

var INLINE_COMPRESS_REG = /(<(script|style)[\s\S]+?\b(?:feather|data)-inline-compress\b[\s\S]*?>)([\s\S]*?)<\/\2>/g;
var ug = require('uglify-js'), clean = require('clean-css');

module.exports = function (content, file, conf){
    if(file.isHtmlLike){
        var tmp;

        content = content.replace(INLINE_COMPRESS_REG, function(_0, _1, _2, _3, _4){
            if(_2 == 'script'){
                _3 = ug.minify(_3, {fromString: true}).code;
            }else{
                _3 = clean.process(_3, {processImport: false});
            }

            return _1 + _3 + '</' + _2 + '>';
        });
    }

    return content;
}