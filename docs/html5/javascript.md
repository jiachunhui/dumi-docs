# Javascript

## 常用代码

```js
location.reload();
javascript: history.go(-1);
```

## 扩展方法

```js
function ApiResource() {
  this.data = [
    { id: 1, cn: '成功加入购物车', en: 'Successfully add to the cart.' },
    { id: 2, cn: '登录后再操作', en: 'Login and then operate' },
  ];
}

ApiResource.prototype.getEn = function (val) {
  var datas = this.data;
  for (var i = 0; i < datas.length; i++) {
    if (datas[i].cn == val) {
      return datas[i].en;
    }
  }
  return val;
};
console.log(ApiResource);
console.log(new ApiResource().getEn('登录后再操作'));
```
