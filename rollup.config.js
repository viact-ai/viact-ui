import Ts from 'rollup-plugin-typescript2'
import url from '@rollup/plugin-url'

export default {
  input: [
    'src/index.ts',
    'src/icons/index.ts',
    'src/theme/index.tsx',
    'src/layouts/index.ts',
  ],
  output: {
    dir: 'lib',
    format: 'esm',
    sourcemap: true,
  },
  watch: {
    include: ['src/**'],
  },
  plugins: [Ts(), url()],
  preserveModules: true,
  external: ['react'],
}
