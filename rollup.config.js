import peerDepsExternal from "rollup-plugin-peer-deps-external"
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import typescript from "rollup-plugin-typescript2"
import postcss from "rollup-plugin-postcss"
import svgr from "@svgr/rollup"
import url from "@rollup/plugin-url"
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const packageJson = require("./package.json")
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path")

export default {
  input: "src/index.ts",
  // output: [
  //   {
  //     file: packageJson.main,
  //     format: "cjs",
  //     sourcemap: true,
  //   },
  //   {
  //     file: packageJson.module,
  //     format: "esm",
  //     sourcemap: true,
  //   },
  // ],
  output: {
    dir: "build",
    format: "esm",
    sourcemap: true,
    exports: "named",
    preserveModules: true,
    preserveModulesRoot: "src",
  },
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      extract: false,
      modules: true,
      extensions: [".css", ".sass", ".scss"],
      use: [
        [
          "sass",
          {
            includePaths: [path.resolve("src"), path.resolve("node_modules")],
          },
        ],
      ],
    }),
    url(),
    svgr(),
  ],
}
