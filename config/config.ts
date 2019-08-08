import { IConfig } from 'umi-types';
import pageRoutes from './routes.config.js';

// ref: https://umijs.org/config/
const config: IConfig =  {
  treeShaking: true,
  outputPath: './dists',
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
}

export default config;
