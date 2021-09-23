import peerDepsExternal from "rollup-plugin-peer-deps-external"
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import typescript from "rollup-plugin-typescript2"
import postcss from "rollup-plugin-postcss"
import copy from "rollup-plugin-copy"
import url from "@rollup/plugin-url"
import svgr from "@svgr/rollup"

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path")

export default {
  input: "src/index.ts",
  output: {
    dir: "build",
    format: "cjs",
    exports: "named",
    preserveModules: true,
  },
  moduleContext: id => {
    const thisAsWindowForModules = [
      "node_modules/dom-lib/es/utils/emptyFunction.js",
      "node_modules/@babel/runtime/helpers/interopRequireDefault.js",
    ]

    if (thisAsWindowForModules.some(id_ => id.trimRight().endsWith(id_))) {
      return "window"
    }
  },
  plugins: [
    peerDepsExternal(),
    commonjs(),
    typescript(),
    resolve({ browser: true, mainFields: ["module"] }),
    postcss({
      extract: false,
      modules: true,
      extensions: [".css", ".sass", ".scss", ".less"],
      use: [
        [
          "sass",
          {
            includePaths: [path.resolve("src"), path.resolve("node_modules")],
          },
        ],
        [
          "less",
          {
            javascriptEnabled: true,
          },
        ],
      ],
    }),
    url(),
    svgr(),
    copy({
      targets: [{ src: "src/types/*", dest: "build/src/types" }],
    }),
  ],
}
