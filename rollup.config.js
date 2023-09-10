import { defineConfig } from 'rollup';
import { join } from 'path';

import del from 'rollup-plugin-delete';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import autoPrefixer from 'autoprefixer';
import vue from 'rollup-plugin-vue';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import babel from '@rollup/plugin-babel';
import cleanup from 'rollup-plugin-cleanup';

const outputDir = 'dist';

const entry = 'packages/index.ts';

export default defineConfig([
  {
    input: [entry], // 入口文件路径
    output: [
      {
        format: 'esm', // ES 模块格式
        dir: join(outputDir, 'esm'), // 输出到 dist/esm 目录
        preserveModules: true,
        preserveModulesRoot: 'packages',
        exports: 'named',
      },
      {
        format: 'cjs', // CommonJS 模块格式
        dir: join(outputDir, 'commonjs'), // 输出到 dist/commonjs 目录
        preserveModules: true,
        preserveModulesRoot: 'packages',
        exports: 'named'
      },
    ],
    onwarn: (warning) => {
      if (warning.code === 'THIS_IS_UNDEFINED') {
        return;
      }
      console.error(warning.message);
    },

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
      cleanup({
        comments: 'none',
        maxEmptyLines: 0,
        sourcemap: true,
        extensions: ['js', 'jsx', 'mjs', 'cjs']
      }),
    ],
  }
]);

