## create-react-app环境配置
### 一、使用eject(npm run eject)暴露出webpack配置
该方法会直接在项目下生成配置文件，可以直接在配置文件中修改。
***但该过程不可逆，不推荐该种用法***

### 二、使用插件react-app-rewired
react-app-rewired搭配插件customize-cra，在根目录下创建config-overrides.js文件可以覆盖默认配置；
***因react-app-rewired从19年后就没有人维护，也不推荐这种方法***

### 三、使用craco插件
安装
```powershell
yarn add @craco/craco
```
OR
```powershell
npm install @craco/craco
```

在根目录下创建craco.config.js配置
具体使用方法参考官方文档: [https://github.com/gsoft-inc/craco](https://github.com/gsoft-inc/craco)

**关于使用sass配置全局scss文件说明:**
在网上很多人都是这种写法(使用**data**),让我郁闷半天，查看webpack文档才发现这个是webpack4写法，webpack5中sass-loader在实际的文件之前要添加的 Sass / SCSS 代码使用**additionalData**

```javascript
module.exports = {
    style: {
        sass: {
            loaderOptions:{
                data: `@import "~@/variable.scss";`,//webpack4写法
                additionalData: `@import "~@/variable.scss";`//webpack5写法
            }
        }
    }
}
```

后面再有其他配置问题均会添加到此处，欢迎大佬们多多指导。