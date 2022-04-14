# JS模块化规范
> 时间线：AMD => CMD => CommonJs => UMD => ES6

# ADM
1、 异步模块定义规范（Asynchronous Module Definition）  
2、 适合在浏览器环境中异步加载模块  
3、 可以并行加载多个模块  
4、 AMD规范的实现：require.js

```javascript
    //定义
    define("moduleName", ["dep1", "dep2"], function(d1, d2) {...});
    //加载模块
    require(["moduleName",...], function(moduleName,...){...})
```

# CMD
1、 通用模块定义规范（Common Module Definiton）  
2、 异步加载模块，兼容nodejs  
3、 一个模块就是一个文件  
4、CMD规范的实现:SeaJS  

```javascript
    //require 是一个方法，接受模块标识作为唯一参数，用来获取其他模块提供的接口：require(id)
    //exports 是一个对象，用来向外提供模块接口
    //module 是一个对象，上面存储了与当前模块相关联的一些属性和方法
    define(function(require, exports, module) {
        var a = require('./a');
        a.doSomething();
        // 依赖就近书写，什么时候用到什么时候引入
        var b = require('./b');
        b.doSomething();
    });
```

# CommonJS
1、 通常用于服务端的nodejs中  
2、 每个文件就是一个模块  
3、 module代表当前模块，module.exports暴露模块，require方法加载模块  

```javascript
    //moduleA.js
    module.exports = {a:1};

    //moduleB.js
    var moduleA = require(moduleAFilePath);
    var b = moduleA.a
```

# UMD
1、 通用模块定义规范（Universal Module Definition）  
2、 UMD是AMD和CommonJS的糅合  
3、 UMD先判断是否支持Node.js的模块（exports）是否存在，存在则使用Node.js模块模式；在判断是否支持AMD（define是否存在），存在则使用AMD方式加载模块。

```javascript
    (function (window, factory) {
        if (typeof exports === 'object') {
            module.exports = factory();
        } else if (typeof define === 'function' && define.amd) {
            define(factory);
        } else {
            window.eventUtil = factory();
        }
    })(this, function () {
        //module ...
    });
```

# ES6
1、 ES6 在语言标准的层面上，实现了模块功能  
2、 浏览器和服务器通用的模块解决方案  
3、 ES6 模块设计思想：尽量的静态化、使得编译时就能确定模块的依赖关系，以及输入和输出的变量（CommonJS和AMD模块，都只能在运行时确定这些东西）
4、 export导出， import加载

```javascript
    //moduleA.js
    export default {
        a:1
    }

    //moduleB.js
    import { a } from 'moduleA.js'
```

# AMD与CMD的区别
1、 对于依赖的模块，AMD 是提前执行，CMD 是延迟执行。不过 RequireJS 从2.0开始，也改成了可以延迟执行  
2、 AMD推崇依赖前置；CMD推崇依赖就近，只有在用到某个模块的时候再去require


# require与import的区别
require使用与CommonJs规范，import使用于Es6模块规范；所以两者的区别实质是两种规范的区别；  
require/exports 是必要通用且必须的；因为事实上，目前你编写的 import/export 最终都是编译为 require/exports 来执行的。
### Commonjs
1、 对于基本数据类型，属于复制。即会被模块缓存；同时，在另一个模块可以对该模块输出的变量重新赋值。  
2、 对于复杂数据类型，属于浅拷贝。由于两个模块引用的对象指向同一个内存空间，因此对该模块的值做修改时会影响另一个模块。  
3、 当使用require命令加载某个模块时，就会运行整个模块的代码。  
4、 当使用require命令加载同一个模块时，不会再执行该模块，而是取到缓存之中的值。也就是说，CommonJS模块无论加载多少次，都只会在第一次加载时运行一次，以后再加载，就返回第一次运行的结果，除非手动清除系统缓存。  
5、 循环加载时，属于加载时执行。即脚本代码在require的时候，就会全部执行。一旦出现某个模块被"循环加载"，就只输出已经执行的部分，还未执行的部分不会输出。  
### es6
1、 ES6模块中的值属于【动态只读引用】。  
2、 对于只读来说，即不允许修改引入变量的值，import的变量是只读的，不论是基本数据类型还是复杂数据类型。当模块遇到import命令时，就会生成一个只读引用。等到脚本真正执行时，再根据这个只读引用，到被加载的那个模块里面去取值。  
3、 对于动态来说，原始值发生变化，import加载的值也会发生变化。不论是基本数据类型还是复杂数据类型。  
4、 循环加载时，ES6模块是动态引用。只要两个模块之间存在某个引用，代码就能够执行。  

