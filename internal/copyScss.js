// ...
import { copyFileSync } from 'fs';
import { defineConfig } from 'rollup';

// ...

export default () => defineConfig([
  {
    // ...
    plugins: [
      // ...
      {
        name: 'copy-scss-files', // 插件的唯一名称
        generateBundle(_, bundle) {
          // 遍历捆绑包以查找并复制.scss文件
          for (const fileName in bundle) {
            if (fileName.endsWith('.scss')) {

              const filePath = bundle[fileName].facadeModuleId;

              const outputFilePath = path.join(outputDir, fileName);

              copyFileSync(filePath, outputFilePath);
            }
          }
        },
      },
    ],
  },
  // ...
]);

