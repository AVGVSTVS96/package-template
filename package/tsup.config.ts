import { defineConfig } from 'tsup';
import peerDependencies from './package.json';

export default defineConfig((options) => {
  const dev = !!options.watch;
  return {
    entry: ['src/index.ts'],
    format: ['esm'],
    target: 'es2022',
    dts: true,
    sourcemap: true,
    clean: true,
    minify: !dev,
    tsconfig: 'tsconfig.json',
    
    // Remove if there are no peer dependencies
    external: Object.keys(peerDependencies),
  };
});
