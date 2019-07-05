创建`react`组件库的工具, 基于`create-react-app`构建.

---

## 何时使用

### 以下情况使用`create-react-library`

这是使用最多的工具, 基于`rollup`, 非常易用:
[create-react-library](https://github.com/transitive-bullshit/create-react-library)\
请优先使用它, 直到你遇到`rollup`相关的问题(比如增量构建慢, 无法解决的 bug)

### 以下情况使用`create-react-library-webpack`

- 你需要创建一个`react`组件库
- `typescript`是你的最爱
- 无法忍受动辄 5s 以上的增量构建速度
- 使用`create-react-library`遇到难以解决的`rollup`相关问题

## 其它候选

`umi`社区的[father](https://github.com/umijs/father)

---

## 如何使用

### `git clone...`

然后修改项目名称等信息.
`yarn`

### `yarn start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

### `yarn build`

只会构建`lib`目录下的文件

### `npm publish`

只会发布`lib`目录下的文件
