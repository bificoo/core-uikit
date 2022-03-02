import peerDepsExternal from "rollup-plugin-peer-deps-external"
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import typescript from "rollup-plugin-typescript2"
import postcss from "rollup-plugin-postcss"
import copy from "rollup-plugin-copy"
import url from "@rollup/plugin-url"
import svgr from "@svgr/rollup"
import ttypescript from 'ttypescript'
import del from "rollup-plugin-delete";

const path = require("path")
const extensions = ['.js', '.jsx', '.ts', '.tsx'];

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  input: "src/index",
  output: {
    dir: "build",
    format: "es",
    exports: "named",
    preserveModules: true,
  },
  onwarn: function (warning) {
    // 跳過一些警告
    // https://github.com/rollup/rollup/issues/794
    // https://rollupjs.org/guide/en/#error-this-is-undefined
    if (warning.code === 'THIS_IS_UNDEFINED') return;
    if (warning.code === 'CIRCULAR_DEPENDENCY') return;
    if (warning.code === 'UNUSED_EXTERNAL_IMPORT') return;

    // 拋出異常
    if (warning.code === 'NON_EXISTENT_EXPORT') throw new Error(warning.message);

    console.warn(warning.message);
  },
  plugins: [
    del({ targets: 'build/*' }),
    peerDepsExternal(),
    resolve({ extensions, browser: true, mainFields: ["module"] }),
    // Node.js 有些套件需要加入include設定才會正常
    commonjs({ include: ['node_modules/**'] }),
    // https://github.com/zerkalica/zerollup/issues/11
    typescript({ typescript: ttypescript }),
    postcss({
      extract: false,
      modules: true,
      extensions: [".css", ".sass", ".scss", ".less"],
      use: [
        ["sass", {
          includePaths: [
            path.resolve("src"),
            path.resolve("node_modules")]
        }],
        ["less", { javascriptEnabled: true }],
      ],
    }),
    url(),
    svgr({
      dimensions: true,
      svgoConfig: {
        plugins: [{
          name: 'preset-default',
          params: {
            overrides: {
              removeViewBox: false,
            },
          },
        },
        {
          name: "removeXMLNS",
        }
      ]
      }
    }),
    copy({ targets: [{ src: "src/types/*", dest: "build/src/types" }] }),
  ],
}
