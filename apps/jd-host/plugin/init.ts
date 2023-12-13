import { init } from '@module-federation/runtime';
import customPlugin from '../plugin/runtimePlugin';

init({
  name: 'host',
  plugins: [customPlugin()],
  remotes: [
    {
      name: 'remote',
      alias: 'remote',
      entry: 'http://localhost:3011/_next/static/chunks/remoteEntry.js',
    },
  ],
  shared: {
    'local-package': {
      version: '1.0.0',
      lib: require('local-package'),
      shareConfig: {
        requiredVersion: '1.0.0',
        // strictVersion: true,
        // singleton: true,
      },
    },
    'next/dynamic': {
      version: require('next/package.json').version,
      lib: require('next/dynamic'),
      shareConfig: {
        requiredVersion: false,
        singleton: true,
      },
    },
    'next/head': {
      version: require('next/package.json').version,
      lib: require('next/head'),
      shareConfig: {
        requiredVersion: false,
        singleton: true,
      },
    },
    'next/link': {
      version: require('next/package.json').version,
      lib: require('next/head'),
      shareConfig: {
        requiredVersion: false,
        singleton: true,
      },
    },
    'next/router': {
      version: require('next/package.json').version,
      lib: require('next/router'),
      shareConfig: {
        requiredVersion: false,
        singleton: true,
      },
    },
    '@module-federation/utilities': {
      version: require('@module-federation/utilities/package.json').version,
      lib: require('@module-federation/utilities'),
      shareConfig: {
        eager: true,
        requiredVersion: require('@module-federation/utilities/package.json')
          .version,
      },
    },
    'next/image': {
      version: require('next/package.json').version,
      lib: require('next/image'),
      shareConfig: {
        requiredVersion: false,
        singleton: true,
      },
    },
    'next/script': {
      version: require('next/package.json').version,
      lib: require('next/script'),
      shareConfig: {
        requiredVersion: false,
        singleton: true,
      },
    },
    react: {
      version: require('react/package.json').version,
      lib: require('react'),
      shareConfig: {
        requiredVersion: false,
        singleton: true,
      },
    },
    'react-dom': {
      version: require('react-dom/package.json').version,
      lib: require('react-dom'),
      shareConfig: {
        requiredVersion: false,
        singleton: true,
      },
    },
    'react/jsx-dev-runtime': {
      version: require('react/package.json').version,
      lib: require('react/jsx-dev-runtime'),
      shareConfig: {
        requiredVersion: false,
        singleton: true,
      },
    },
    'react/jsx-runtime': {
      version: require('react/package.json').version,
      lib: require('react/jsx-runtime'),
      shareConfig: {
        requiredVersion: false,
        singleton: true,
      },
    },
    'styled-jsx': {
      version: require('styled-jsx/package.json').version,
      lib: require('styled-jsx'),
      shareConfig: {
        requiredVersion: false,
        singleton: true,
      },
    },
    'styled-jsx/style': {
      version: require('styled-jsx/package.json').version,
      lib: require('styled-jsx/style'),
      shareConfig: {
        requiredVersion: false,
        singleton: true,
      },
    },
    'styled-jsx/css': {
      version: require('styled-jsx/package.json').version,
      lib: require('styled-jsx/css'),
      shareConfig: {
        requiredVersion: false,
        singleton: true,
      },
    },
  },
});
