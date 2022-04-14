## react首次打包白屏
react打包后index.html中引入文件是相对于根目录的('/')。
打包后的文件直接打开使用的是file协议，是针对当前文件管理的根目录进行加载的,所以文件路径是错误的。
服务器打开是使用http协议，针对网站根目录，就是域名默认指向的文件夹。

**解决方案:**
	package.json文件加入
	

```javascript
package.json
{
	...,
	homepage: '.',
	...
}
```