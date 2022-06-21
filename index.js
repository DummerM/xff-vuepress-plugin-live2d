/*
 * @Descripttion: 
 * @version: 
 * @Author: xingfangfang
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: xingfangfang
 * @LastEditTime: 2022-06-21 09:42:02
 */
const { resolve } = require("path");

module.exports = (options = {}, context) => ({
  define() {
    const modelName = options.modelName;
    const mobileShow = options.mobileShow;
    const modelPosition = options.position;

    return {
      MODEL_NAME: modelName || '',
      MOBILE_SHOW: mobileShow || false,
      MODEL_POSITION: modelPosition || 'right',
    }
  },

  enhanceAppFiles: resolve(__dirname, "enhanceAppFile.js"),
  globalUIComponents: "Container"
});
