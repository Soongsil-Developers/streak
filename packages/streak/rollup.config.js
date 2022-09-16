import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import svgr from '@svgr/rollup';
import image from '@rollup/plugin-image';
import url from '@rollup/plugin-url';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import sourcemaps from 'rollup-plugin-sourcemaps';
import babel from '@rollup/plugin-babel';
import { visualizer } from 'rollup-plugin-visualizer';
import postcss from 'rollup-plugin-postcss';

const pkg = require('./package.json');

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const external = ['react', 'react-dom'];
const config = {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  external,
  plugins: [
    resolve({ extensions }),
    babel({ exclude: 'node_modules/**' }),
    commonjs({ include: 'node_modules/**' }),
    typescript({
      useTsconfigDeclarationDir: true,
    }),
    postcss({
      extensions: ['.css'],
    }),
    svgr(),
    image(),
    visualizer(),
    url(),
    peerDepsExternal(),
    sourcemaps(),
  ],
};
export default config;
