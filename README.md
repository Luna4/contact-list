# contact-list

## Css Modules 说明
- 全局样式书写时，用`:global`包裹；使用时，使用`className="class"`
- 局部样式直接书写，使用时，使用`styleName="class"`

## 目录结构

```
.
├── /assets/                            # 静态资源，如图片、字体
├── /config/                            # webpack配置文件
│   ├── /packing.js                     # 和构建工具相关的配置
│   ├── /webpack.build.babel.js         # webpack编译环境配置文件
│   └── /webpack.serve:dist.js          # webpack预览编译后结果的配置文件
├── /mock/                              # 模拟数据
│   ├── /api/                           # API接口类型模拟数据
│   └── /pages/                         # 页面初始化类型模拟数据
├── /prd/                               # 项目编译输出目录
├── /src/                               # 项目源码目录
│   ├── /entries/                       # webpack打包入口js
│   ├── /profiles/                      # 类似maven的profiles，设置不同环境下的配置
│   └── /templates/                     # 后端模版，如jade、smarty
├── .babelrc                            # babel配置
├── .editorconfig                       # 代码编辑器配置
├── .eslintrc                           # eslint配置
├── package.json
├── pom.xml                             # maven配置
└── README.md  

```

## 项目完整目录

```
.
├── README.md
├── assets
│   ├── README.md
│   ├── fonts
│   │   ├── icomoon.eot
│   │   ├── icomoon.svg
│   │   ├── icomoon.ttf
│   │   └── icomoon.woff
│   └── images
│       └── packing-logo.png
├── build.sh
├── config
│   ├── packing.js
│   ├── webpack.build.babel.js
│   └── webpack.serve.babel.js
├── jsconfig.json
├── mock
│   ├── README.md
│   ├── api
│   │   └── contactsList.js
│   └── pages
│       ├── __global.js
│       └── index.js
├── package.json
├── postcss.config.js
├── src
│   ├── README.md
│   ├── common
│   │   ├── styles
│   │   │   ├── common.css
│   │   │   └── icon.css
│   │   └── utils
│   │       └── ajax.js
│   ├── components
│   │   ├── Header
│   │   │   ├── index.css
│   │   │   └── index.js
│   │   ├── Layout
│   │   │   ├── index.css
│   │   │   └── index.js
│   │   ├── Loading
│   │   │   ├── index.css
│   │   │   └── index.js
│   │   ├── Modal
│   │   │   ├── index.css
│   │   │   └── index.js
│   │   └── Sidebar
│   │       ├── index.css
│   │       └── index.js
│   ├── pages
│   │   ├── admin
│   │   │   ├── entry.js
│   │   │   ├── index.css
│   │   │   ├── index.js
│   │   │   └── store.js
│   │   └── list
│   │       ├── config.js
│   │       ├── entry.js
│   │       ├── index.js
│   │       ├── store.js
│   │       └── style.css
│   ├── profiles
│   │   ├── beta.js
│   │   ├── development.js
│   │   ├── local.js
│   │   └── production.js
│   └── templates
│       ├── layout
│       │   └── default.pug
│       └── pages
│           ├── admin
│           │   └── admin.pug
│           └── list
│               └── list.pug
└── yarn.lock

```
