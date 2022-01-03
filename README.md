# Core UIKit
StoryBook 元件庫專案

## Available Scripts

### `yarn start`

[http://localhost:6006](http://localhost:6006)

StoryBook 開發模式，每次編輯儲存後會重整畫面。

### `yarn build`

透過 Webpack 建立 StoryBook 部署版本至 `build` 資料夾，建置的檔案包含基本的效能優化、壓縮、為檔名加入 hash 等作業。

**注意：目前這個指令壞了，以後再修XDD**

### `yarn build:library`
透過 Rollup 將 components 連帶型別定義打包至 `build` 資料夾，使外部專案能夠安裝引用並使用 TS 的型別提示。

### `yarn analyze`
分析專案的檔案組成結構。

### `yarn eject`

**注意：這個操作不可逆！**

將 CRA 的設定檔釋出，可以自定義 Webpack 的設定。