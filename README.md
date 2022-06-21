- ### 使用方式
  ```shell
    npm i xff-vuepress-plugin-live2d@0.0.2 -S

  ```
  #### 然后在'/docs/.vuepress/config.js'里引入
  ```javascript
    plugins: [
      [
        "xff-vuepress-plugin-live2d@0.0.2",
        {
          "modelName": "",
          "mobileShow": false
        }
      ]
    ]
  ```
  #### 属性
  | 属性名称       | 类型                | 说明                                       | 默认值     |
  | ---------- | ----------------- | ---------------------------------------- | ------- |
  | modelName  | *String*或者*Array* | 模型名称，可选值8个类型（z16，Epsilon2.1，izumi，koharu，shizuku，miku, hijiki, tororo)，也可传入一个数组```['hijiki','tororo',...]```(传入数组时刷新页面或者访问不同页面随机展示 ) | ''      |
  | mobileShow | *Boolean*         | 是否在移动端展示，默认不展示                           | false   |
  | position   | *String*          | 模型展示在左下角or右下角                            | 'right' |
