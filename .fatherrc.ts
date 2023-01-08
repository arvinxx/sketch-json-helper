import { defineConfig } from 'father';

export default defineConfig({
  cjs: {
    output: 'lib',
    transformer: 'babel',
    // sketch 应该是内建了 node8 程度的 polyfill
    targets: { node: 8 },
  },
});
