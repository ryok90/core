const { registerPluginTSTranspiler } = require('nx/src/utils/nx-plugin.js');

registerPluginTSTranspiler();
const {
  ModuleFederationPlugin,
} = require('@module-federation/enhanced/webpack');
const { composePlugins, withNx } = require('@nx/webpack');
const { withReact } = require('@nx/react');
process.env.FEDERATION_DEBUG = true;

module.exports = composePlugins(
  withNx(),
  withReact(),
  async (config, context) => {
    // prevent cyclic updates
    config.watchOptions = {
      ignored: ['**/node_modules/**', '**/@mf-types/**'],
    };
    const baseConfig = {
      name: 'react_ts_host',
      filename: 'remoteEntry.js',
      remotes: {
        react_ts_nested_remote:
          // 'react_ts_nested_remote@http://localhost:3005/remoteEntry.js',
          // 'react_ts_nested_remote@http://localhost:3005/mf-manifest.json',
          `promise new Promise(resolve => {
            const raw = 'remote@http://localhost:3011/remoteEntry.js'
            const [_, remoteUrlWithVersion] = raw.split('@')
            const script = document.createElement('script')
            script.src = remoteUrlWithVersion
            script.onload = () => {
              const proxy = {
                get: (request) => window.remote.get(request),
                init: (arg) => {
                  try {
                    return window.remote.init(arg)
                  } catch(e) {
                    console.log('remote container already initialized')
                  }
                }
              }
              resolve(proxy)
            }
            document.head.appendChild(script);
          })`,
      },
    };
    config.plugins.push(new ModuleFederationPlugin(baseConfig));

    config.optimization.runtimeChunk = false;
    config.plugins.forEach((p) => {
      if (p.constructor.name === 'ModuleFederationPlugin') {
        //Temporary workaround - https://github.com/nrwl/nx/issues/16983
        p._options.library = undefined;
      }
    });

    //Temporary workaround - https://github.com/nrwl/nx/issues/16983
    config.experiments = { outputModule: false };

    // Update the webpack config as needed here.
    // e.g. `config.plugins.push(new MyPlugin())`
    config.output = {
      ...config.output,
      scriptType: 'text/javascript',
    };
    config.optimization = {
      runtimeChunk: false,
      minimize: false,
    };
    return config;
  },
);
