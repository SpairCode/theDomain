import { IConfig } from 'umi-types';
import pageRoutes from './routes.config.js';
import path from 'path';

// ref: https://umijs.org/config/
const config: IConfig =  {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
      dva: {
        immer: true
      },
      dynamicImport: false,
      title: 'theDomain',
      dll: false,
      
      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
  routes: pageRoutes,
  // base: '192.168.10.234:8000/',
  publicPath: './',
  history: 'hash',
  define: {
    'process.env': 'product'
  }
}

export default config;
