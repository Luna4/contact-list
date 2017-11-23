/**
 * 这个文件可以修改build的默认设置
 * 默认配置请看 `node_modules/packing/config/webpack.build.babel.js`
 *
 * @param object webpackConfig 默认配置对象
 * @param object program packing-cli程序对象
 * @param object appConfig config/packing.js中的配置
 */

export default (webpackConfig) => {
  const config = webpackConfig;

  if (!config.resolve.alias) {
    config.resolve.alias = {};
  }
  config.resolve.alias.ajax = 'common/utils/ajax.js';

  return config;
};
