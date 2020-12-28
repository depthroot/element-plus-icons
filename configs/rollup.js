const path = require('path')
const rollup = require('rollup')
const typescript = require('rollup-plugin-typescript2')

const root = path.resolve(__dirname, '..');
const esm = {
  file: path.resolve(root, './build/es/index.js'),
  format: 'esm',
  name: 'icons',
  sourcemap: false,
};

const cjs = {
  file: path.resolve(root, './build/lib/index.js'),
  format: 'cjs',
  exports: 'named',
  sourcemap: false,
}

rollup.rollup({
  input: path.resolve(root, './packages/index.ts'),
  plugins: [typescript()],
  external: ['vue']
}).then(async bundle => {
  await Promise.all([bundle.write(esm), bundle.write(cjs)]);
  console.log('full bundle built success');
});