# dumi app

## Getting Started

Install dependencies,

```bash
$ npm i
```

Start the dev server,

```bash
$ npm start
```

Build site app,

```bash
$ npm run build
```

# 生成静态文件

# 进入生成的文件夹

cd /dist

# 如果是发布到自定义域名

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>

git push -f git@github.com:jiachunhui/docs.git master:gh-pages

# 把上面的 <USERNAME> 换成你自己的 Github 用户名，<REPO> 换成仓库名，比如我这里就是：
