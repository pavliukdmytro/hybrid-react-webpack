const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

/** дев файл **/

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
});