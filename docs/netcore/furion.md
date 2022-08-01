---
title: Furion

---

# Furion

[Furion 文档链接 ](https://dotnetchina.gitee.io/furion/docs/appstartup)

## AppStartup 启动

### 问题 1：如何给静态资源设置跨域设置

##### 问题描述

> 前端使用 canvas 加载图片时，由于图片跨域问题，报如下错误。 [CSDN 说明 ](https://blog.csdn.net/sumimg/article/details/115375085?spm=1001.2101.3001.6650.4&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-4-115375085-blog-92239063.pc_relevant_multi_platform_whitelistv2_exp180w&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-4-115375085-blog-92239063.pc_relevant_multi_platform_whitelistv2_exp180w)
>
> canvas 生成图片 toDataURL 报错(Uncaught DOMException: Failed to execute ‘toDataURL‘ on ‘HTMLCanvasEl)

```js
var img = new Image();
img.setAttribute('crossOrigin', 'anonymous'); //关键
img.src = url + '?time=' + new Date().valueOf();
img.src = '图片地址';
```

**前端调用图片，一定要给加了随机数做参数，因为图片缓存也会使 Canvas 访问不到图片**

#### **解决方案：Furion 代码设置**

给静态资源文件配置 Headers

```.net
app.UseStaticFiles(new StaticFileOptions
{
			OnPrepareResponse = (c) =>
			{
				c.Context.Response.Headers.Add("Access-Control-Allow-Origin", "*");
			}
});
```

[接口跨域，看文档 ](https://dotnetchina.gitee.io/furion/docs/cors)

### 问题 2：
