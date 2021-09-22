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
  onwarn: function (warning) {
    if (warning.code === "THIS_IS_UNDEFINED") {
      return
    }
    console.error(warning.message)
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
