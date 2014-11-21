feather-postprocessor-inline-compress
======================

#简介

feather-postprocessor-inline-compress是[feather](http://github.com/jsyczhanghao/feather)中的一个内联样式以及js进行压缩的插件，它可同样作为[fis](http://fis.baidu.com/)的插件进行使用。


#使用

feather开发环境中以集成该插件，不需要feather_conf.js的配置


使用非feather的开发环境时使用：

```shell
npm install feather-postprocessor-inline-compress
```

fis-conf.js
```js
fis.config.get('modules.postprocessor').push(require('feather-postprocessor-inline-compress'));
```

index.html
```html
<script feather-inline-compress>
(function(window){
console.log(123);
})(window);
</script>

<style type="text/css" feather-inline-compress>
div{
  font-size: 12px;
  font-weight: bold;
}
</style>
```
