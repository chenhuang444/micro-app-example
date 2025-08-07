import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  server: {
    port: 3001,
  },
  dev: {
    // reactRefresh 会向 webworker 中注入代码，依赖 react。导致 dev 模式
    // webworker 加载失败。先简单把所有 hmr 禁用掉
    hmr: false,
    liveReload: true,
  },
  output: {
    sourceMap: true,
  },
});
