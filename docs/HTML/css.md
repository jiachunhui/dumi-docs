---
title: CSS
nav:
  path: '/html'
  title: 'Html'
---

# CSS 相关

## **超出文本截断**

**多行**

```css
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
/* autoprefixer: off */
-webkit-box-orient: vertical;
/* autoprefixer: on */
-webkit-line-clamp: 2;
```

<Alert>
注意：上面的写法兼容有的浏览器版本不支持的问题，直接复制使用，只需要修改行参数就可以
</Alert>

**单行**

```css
overflow: hidden;
white-space: nowrap;
-o-text-overflow: ellipsis;
text-overflow: ellipsis;
```

## **苹方字体**

```css
_苹方-简 常规体_
font-family: PingFangSC-Regular, sans-serif;
苹方-简 极细体
font-family: PingFangSC-Ultralight, sans-serif;
苹方-简 细体
font-family: PingFangSC-Light, sans-serif;
苹方-简 纤细体
font-family: PingFangSC-Thin, sans-serif;
苹方-简 中黑体
font-family: PingFangSC-Medium, sans-serif;
苹方-简 中粗体
font-family: PingFangSC-Semibold, sans-serif;
苹方-繁 ：
font-family: PingFangTC-Regular, sans-serif;
font-family: PingFangTC-Ultralight, sans-serif;
font-family: PingFangTC-Light, sans-serif;
font-family: PingFangTC-Thin, sans-serif;
font-family: PingFangTC-Medium, sans-serif;
font-family: PingFangTC-Semibold, sans-serif;
苹方-港 ：
font-family: PingFangHK-Regular, sans-serif;
font-family: PingFangHK-Ultralight, sans-serif;
font-family: PingFangHK-Light, sans-serif;
font-family: PingFangHK-Thin, sans-serif;
font-family: PingFangHK-Medium, sans-serif;
font-family: PingFangHK-Semibold, sans-serif;
```
