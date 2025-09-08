import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  plugins: [pluginReact(), pluginModuleFederation({
    name: 'MyHostApp',
    library: {
      type: 'window',
      name: 'MyHostApp',
    },
    shared: {
      react: {
        singleton: true,
        requiredVersion: '^18',
      },
      'react-dom': {
        singleton: true,
        requiredVersion: '^18',
      },
      'react-dom/client': {
        singleton: true,
        requiredVersion: '^18',
      },
    }
  })],
  server: {
    port: 3000,
  },
  output: {
    sourceMap: true,
    minify: false,
  },
  tools: {
    rspack: {
      module: {
        parser: {
          javascript: {
            dynamicImportFetchPriority: 'high',
          }
        }
      }
    }
  }
});
