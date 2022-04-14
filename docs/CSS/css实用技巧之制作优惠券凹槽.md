# css实用技巧之制作优惠券凹槽
日常开发中很多商城类项目都需要涉及优惠营销类，自然少不了优惠券的页面制作。而优惠券的设计经常会遇到凹槽，对于刚入门的前端来说没接触过就可能很难想象出如何能用纯CSS写出凹槽，很多人会使用图片作为背景，但使用图片有很大弊端，适用性不够广泛、不易扩展、图片较大占用网络等等。相反使用CSS实现容易扩展优惠券内容，几行代码又大大减小网络占用。今天咱就说说凹槽是如何实现的:
![Alt](https://img-blog.csdnimg.cn/20210611163110762.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzA5MDM5Mw==,size_16,color_FFFFFF,t_70#pic_center=60×60)
以下样式基于HTML:

```html
<div class="coupon"></div>
```

### 1、纯色优惠券
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210611164810902.png)
```css
.coupon{
	width:240px;
	height:100px;
	border-radius:10px;
	background-image: radial-gradient(circle at 9px 8px ,transparent 0%, transparent 8px,#e15852 8px, #e15852 100%);
    background-position: 66px -8px;
    background-size: 100% 100%;
}
```
### 2、线性渐变
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210611194700264.png)

```css
.coupon{
	width:240px;
  height: 100px;
  background: linear-gradient(to right, #fd6868, #fd5252 60px) no-repeat left / 60px 100%,
              radial-gradient(circle at 8px 8px, transparent 8px, #fd5252 8px) repeat-y 60px -8px / 16px 100%, 
              linear-gradient(to right, #fd5252 76px, #fe0000) no-repeat 76px 0 / 100% 100%;
  position:relative;
  border-radius:10px;
}
```
### 3、带阴影
正常我们使用阴影是box-shadow,但是box-shadow是根据盒子边缘进行投影，而使用背景透明用box-shadow是无法投影，需要使用filter:drop-shadow();

![](https://img-blog.csdnimg.cn/20210611195327558.png)

```css
box-shadow:2px 3px 6px 0 black;
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210611195546282.png)

```css
filter: drop-shadow(2px 4px 6px black);
```
### 4、对于没有阴影且背景纯色，可使用伪类实现
```css
.coupon-container{
	--bg-color:#fff;
	background:var(--bg-color);
}
.coupon{
	width:240px;
	height:100px;
	border-radius:10px;
	position:relative;
	background: #fd6868;
}
.coupon::before, .coupon::after{
	content:'';
	display:block;
	width:12px;
	height:6px;
	position:absolute;
	left:60px;
	background:var(--bg-color);
}
.coupon::before{
	top:0;
	border-radius:0 0 6px 6px;
}
.coupon::after{
	bottom:0;
	border-radius:6px 6px 0 0;
}
```