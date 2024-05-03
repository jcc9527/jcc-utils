import resolve from 'rollup-plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
export default {
  input: './src/index.ts', // 入口文件
  output: [
    {
      format: 'cjs', // 打包为commonjs格式
      file: 'dist/jcc-utils.cjs.js', // 打包后的文件路径名称
      name: 'jccUtils' // 打包后的默认导出文件名称
    },
    {
      format: 'esm', // 打包为esm格式
      file: 'dist/jcc-utils.esm.js',
      name: 'jccUtils'
    },
    {
      format: 'umd', // 打包为umd通用格式
      file: 'dist/jcc-utils.umd.js',
      name: 'jccUtils',
      minifyInternalExports: true
    }
  ],
  plugins: [typescript({ tsconfig: './tsconfig.json' }), resolve()]
}
