import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import del from "rollup-plugin-delete";
import url from "@rollup/plugin-url"
import copy from "rollup-plugin-copy"

const path = require("path");
const extensions = ['.js', '.jsx', '.ts', '.tsx'];

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  input: "src/index",
  output: {
    name: "uikit",
    dir: "build",
    format: "cjs",
    exports: "named",
    sourcemap: true,
    preserveModules: true,
    globals: { react: 'React' }
  },
  plugins: [
    url(),
    del({ targets: 'build/*' }),
    copy({ targets: [{ src: "src/types/*", dest: "build/src/types" }] }),
    commonjs(),
    peerDepsExternal(),
    typescript({ tsconfig: './tsconfig.json', useTsconfigDeclarationDir: true }),
    resolve({ extensions, browser: true, mainFields: ["module"] }),
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
    })
  ]
};