# LESS

### base.less

```less
@color-default: #fff;
@color-default-hover: #ff9a00;
@color-footer-bg: #1b2980;
@color-txt: #dcdcdc;
/*pc media*/
@min768: ~'(min-width: 768px)';
@min992: ~'(min-width: 992px)';
@min1200: ~'(min-width: 1200px)';
@min1400: ~'(min-width: 1400px)';
@min1500: ~'(min-width: 1500px)';
@min1600: ~'(min-width: 1600px)';
@min1900: ~'(min-width: 1900px)';
@min2560: ~'(min-width: 2560px)';
/*iconfont图标*/
@font-face {
  font-family: 'iconfont'; /* Project id 1437369 */
  src: url('/content/iconfont/iconfont.woff2?t=1656484136234') format('woff2'), url('/content/iconfont/iconfont.woff?t=1656484136234')
      format('woff'),
    url('/content/iconfont/iconfont.ttf?t=1656484136234') format('truetype');
}

@font-face {
  font-family: 'FlapSerif';
  src: url('/content/font/FlapSerif.ttf') format('truetype');
}

@font-face {
  font-family: 'ARIAL';
  src: url('/content/font/ARIAL.TTF') format('truetype');
}

.iconfont {
  font-family: 'iconfont' !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.img-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.transition {
  transition: all ease-in-out 0.3s;
}

.transition(@s) {
  transition: all ease-in-out @s;
}

.text-overflow {
  overflow: hidden;
  white-space: nowrap;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}

.text-overflow(@s) {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  /* autoprefixer: off */
  -webkit-box-orient: vertical;
  /* autoprefixer: on */
  -webkit-line-clamp: @s;
}

body {
  font-family: Arial, 'Microsoft YaHei', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol', 'Noto Color Emoji';
  overflow-x: hidden;
  background: #1a216a;
}

img {
  max-width: 100%;
}

.font-title1 {
  font-family: 'ARIAL';
}

.font-title {
  font-family: 'FlapSerif', 'Footlight MT';
}

.font-size14 {
  font-size: 12px;

  @media @min1400 {
    font-size: 14px;
  }
}
```
