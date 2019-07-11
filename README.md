创建`react`组件库的工具, 基于`create-react-app`构建.
```
git clone https://github.com/g770728y/create-react-library-webpack.git <your-project-name>
vi ./package.json  <== 修改package.json中的project信息
yarn
```

---

## 特性

- 基于`create-react-app`, 并且没有`eject`
- 你可以使用`scss`等 CRA 的诸多特性, 并且不需要额外配置
- 默认配置了 `storybook`(支持 css module + typescript), 直接在`src`目录下写`.stories.tsx`, 然后 `yarn sb`
- 支持`jest`, 直接在`src`目录下`*.test.ts`, 然后 `yarn test`

---

## 何时使用

社区有好几种选择, 但我不喜欢魔法(担心无法升级), 不喜欢`eject`, 对一些工具居然不支持`typescript`难以理解, 所以自己基于`create-react-app`修改了一个.\

- 你需要创建一个`react`组件库
- 熟悉`create-react-app`
- `typescript`是你的最爱
- 无法忍受动辄 5s 以上的增量构建速度
- 使用`create-react-library`遇到难以解决的`rollup`相关问题

## 其它候选

### 以下情况使用`create-react-library`
然而, 多数情况下, 还是推荐使用`create-react-library`:\
这是使用最多的工具, 基于`rollup`, 非常易用:\
[create-react-library](https://github.com/transitive-bullshit/create-react-library)\
请优先使用它, 直到你遇到`rollup`相关的问题(比如增量构建慢, 无法解决的 bug)

### `father`应该不错, 不过非cra系的, 可能不太习惯
`umi`社区的[father](https://github.com/umijs/father)

---

## 如何使用

### `git clone https://github.com/g770728y/create-react-library-webpack.git <your-project-name>`
```
vi ./package.json  <== 修改package.json中的project信息
yarn
```

### `yarn start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

### `yarn sb`

在 9001 端口运行 storybook

### `yarn build`

只会构建`lib`目录下的文件

### `npm publish`

只会发布`lib`目录下的文件
