import peerDepsExternal from "rollup-plugin-peer-deps-external"
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import typescript from "rollup-plugin-typescript2"
import postcss from "rollup-plugin-postcss"
import svgr from "@svgr/rollup"
import url from "@rollup/plugin-url"
// import rename from "rollup-plugin-rename"
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
    format: "cjs",
    exports: "named",
    preserveModules: true,
  },
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript(),
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
    // rename({
    //   include: ["**/*.ts"],
    //   map: name => {
    //     console.info(
    //       "---",
    //       name,
    //       name
    //         .replace("src/", "")
    //         .replace("node_modules/", "external/")
    //         .replace("../../external", "../external"),
    //     )
    //     return name
    //       .replace("src/", "")
    //       .replace("node_modules/", "external/")
    //       .replace("../../external", "../external")
    //   },
    // }),
  ],
}
