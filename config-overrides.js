const ArcGISPlugin = require("@arcgis/webpack-plugin");
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');

module.exports = function override(config, env) {
    config.resolve.plugins = config.resolve.plugins.filter(plugin => !(plugin instanceof ModuleScopePlugin))
    config.plugins.push(new ArcGISPlugin())
    config.node.global=false
    return config;
  }