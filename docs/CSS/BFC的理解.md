# 概念
BFC（Block Formatting Contexts ） 就是即块级格式化上下文。是Web页面中盒模型布局的CSS渲染模式，指一个独立的渲染区域或者说是一个隔离的独立容器。

# 特性
1.内部的元素会在垂直方向，从顶部开始一个接一个地放置。   
2.元素垂直方向的距离由margin决定。属于同一个BFC的两个相邻 元素的margin会发生叠加  
3.都是从最左边开始的。每个元素的margin box的左边，与包含块border box的左边(对于从左往右的格式化，否则相反)。即使存在浮动也是如此  
4.BFC的区域不会与float box叠加。   
5.BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然。   
6.计算BFC的高度时，浮动元素也参与计算（当BFC内部有浮动时，为了不影响外部元素的布局，BFC计算高度时会包括浮动元素的高度）  

# 触发方式
float 除了none以外的值 

overflow 除了visible 以外的值（hidden，auto，scroll ） 

display (table-cell，table-caption，inline-block, flex, inline-flex) 

position值为（absolute，fixed） 

fieldset元素