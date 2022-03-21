# lazebird/jtools

- 一个基于 web 的小工具集合

## xliffHelper

### 介绍

- 本项目缘起于 google 翻译不支持 xliff 文件。
- <a href="https://lazebird.github.io/xliff-helper/" target="_blank">预览</a>

### 依赖

`"vue": "^3.2.25"`

### 原理

- 解析 xliff/xml 文件中的待翻译字段，默认为 trans-unit 区域，源内容为 source 标签的值，翻译内容为 target 标签的值
- 抽取所有源内容作为待翻译字段，以 id 作为唯一标识符
- 在翻译后基于唯一标识符将翻译内容合并回源文件
- 下载合并后的源文件作为翻译结果文件

### 配置

- id：id
- unitName: trans-unit
- srcName: source
- tgtName: target

### 用法

- 点击左侧上传框上传 xliff 文件
- 点击 Extract Sources 下载抽取的待翻译字段文件
- 将待翻译文件进行翻译操作；**google 翻译注意如下**：
  - 需要使用 docx 类格式，需要手动转换下
  - 翻译后的文件可能存在以下问题，需要手动调整修复：
    - 嵌套引号不符合 json 格式
    - id="1"类信息实际是格式信息，但是被翻译后可能改变成 id = " 1 "等，出现无效字符并破坏原义
    - 翻译结果文件的 target.state 需要从 needs-translation 修改为 translated，否则导入后不会被直接采用；后续考虑代码中自动完成修改
- 点击右侧上传框上传翻译后的 json 格式文件；文件上传后会自动将信息合并到翻译结果字段
- 点击保存按钮下载合并后的 xliff 文件

## i18nHelper

### 介绍

- web 国际化翻译辅助工具
- 主要实现结构化翻译目录和单翻译文件的互相转换功能
- <a href="https://lazebird.github.io/i18n-helper/" target="_blank">预览</a>

### 用法

#### 单文件转目录结构

- 在[JSON File]中上传 json 文件
- 上传完成后，点击[Download Zip]下载转换后的目录结构

#### 目录结构转单文件

- 在[JSON Directory]中选择目录进行上传
- 上传完成后，点击[Download JSON]下载转换后的 json 文件

### 说明

- 本工具为纯前端处理，所有文件不真实上传到后台，不存在隐私类问题
- 文件上传和处理的一些内容信息会在页面中呈现，可以作为参考
- /test 目录文件可以用作参考

## solitaireCount

### 介绍

- 群接龙数据可视化工具
- <a href="https://lazebird.github.io/solitaire-count/" target="_blank">预览</a>

### 使用

- 左侧输入框为布局数据，通过二维数组和表格来画图
- 右侧第一个输入框为数据格式化函数，用于辅助数据识别；第二个输入框为接龙数据，接龙数据默认以换行作为分隔
- 默认情况下显示布局图，背景红色，表示所有目标点都没有接龙；导入接龙数据后，已接龙的点默认背景为绿色
