import vue from 'rollup-plugin-vue';
import typescript from 'rollup-plugin-typescript2';
import sass from 'rollup-plugin-sass';
import postcss from 'rollup-plugin-postcss';
import css from 'rollup-plugin-css-only';
import path, { join } from 'path';
import includePaths from 'rollup-plugin-includepaths';
import { defineConfig } from 'rollup';
import del from 'rollup-plugin-delete';

import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import babel from '@rollup/plugin-babel';
import dts from 'rollup-plugin-dts';
import fs from 'fs';
import autoPrefixer from 'autoprefixer';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import scss from 'rollup-plugin-scss';
import cssModules from 'css-modules-typescript-loader';
import postcssModule from 'postcss-modules';

import copyScss from './internal/copyScss.js';

const outputDir = 'dist';

const entry = 'packages/index.ts';
const componentsDir = 'packages/components';

const componentsName = fs.readdirSync(path.resolve(componentsDir));

const componentsEntry = componentsName.map(
  (name) => `${componentsDir}/${name}/index.ts`
);

// ES Module打包输出
const esmOutput = {
  preserveModules: true,
  // preserveModulesRoot: 'src',
  // exports: 'named',
  assetFileNames: ({ name }) => {
    const { ext, dir, base } = path.parse(name);
    if (ext !== '.css') return '[name].[ext]';
    return path.join(dir, 'style', base);
  }
}

export default defineConfig([
  {
    input: [entry, ...componentsEntry], // 入口文件路径
    output: [
      {
        format: 'esm', // ES 模块格式
        dir: path.join(outputDir, 'esm'), // 输出到 dist/esm 目录
        preserveModules: true
      },
      {
        format: 'cjs', // CommonJS 模块格式
        dir: path.join(outputDir, 'commonjs'), // 输出到 dist/commonjs 目录
        preserveModules: true
      },
    ],
    external: ['vue'],
    plugins: [
      del({ targets: `${outputDir}/*` }),
      peerDepsExternal(),

      postcss({
        extract: true, // 设置是否被提取为单独的文件
        modules: {
          generateScopedName: '[name]__[local]__[hash:base64:5]'
        },
        namedExports: (name) => name.replace(/-/g, '_'), // 修改具名导出
        plugins: [autoPrefixer()], // 使用插件
        sourceMap: true, //
        minimize: true, // 压缩输出的样式文件
      }),
      vue(),
      resolve(),
      json(),
      commonjs(),
      typescript(),
      babel({
        presets: ["@babel/preset-env", '@babel/preset-typescript'],
        babelHelpers: 'bundled',
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss'],
        exclude: ["**/node_modules/**"],
        plugins: ["@vue/babel-plugin-jsx"]
      }),
    ],
  }
]);

