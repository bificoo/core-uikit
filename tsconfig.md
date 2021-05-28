## **noImplicitAny 與 suppressImplicitAnyIndexErrors**
TypeScript 開發者們在 `noImplicitAny` 設定應該是 `true` 還是 `false` 上存在分歧。 這沒有標準答案，你以後還可以修改這個設定。 你的選擇會在大專案中產生顯著差異，所以它值得討論一番。

當 `noImplicitAny` 設定是 `false` (預設值)時， 如果編譯器無法根據變數的用途推斷出變數的型別，它就會悄悄的把變數型別預設為 `any`。這就是「**隱式**」 `any` 的含義。

當 `noImplicitAny` 設定是 `true` 並且 TypeScript 編譯器無法推斷出型別時，它仍然會產生 JavaScript 檔案。 但是它也會「**報告一個錯誤**」。 很多飽經滄桑的程式設計師更喜歡這種嚴格的設定，因為型別檢查能在編譯期間捕獲更多意外錯誤。

即使 `noImplicitAny` 標誌被設定成了 `true`，你也可以把變數的型別設定為 `any`。

如果把 `noImplicitAny` 標誌設定為了 `true`，你可能會得到「**隱式索引錯誤**」。 大多數程式設計師可能覺得「**這種錯誤**」是個煩惱而不是助力。 你可以使用另一個標誌來禁止它們。

```json
"suppressImplicitAnyIndexErrors": true
```

Effective Typescript書中說明到開始全新專案時，應該一開始就打開 `noImplicitAny` ，讓你必須在編寫程式的同時編寫型態，這可以協助Typescript發現問題，改善程式的易讀性，並提升你的開發體驗，除非是要將Javascript轉換成Typescript，否則不要關閉 `noImplicitAny`。

```json
"noImplicitAny": true
```

## **strictNullCheckss**
控制每一種型態可否使用 `null` 和 `undefined` 值。

strictNullCheckss 適合用來捕捉涉及 `null` 和 `undefined` 值的錯誤，但也會提升語言的使用難度。

如果準備開啟新專案建議開啟 `strictNullCheckss`，但如果是這個語言新手，或是要將Javascript轉換成Typescript，你可以考慮關閉它。

如果你不使用 `strictNullCheckss`，請特別留意可怕的「undefined is not an object」執行期錯誤。只要有這類的錯誤，就代表要考慮啟用更嚴格的檢查。改變這項設定會隨著專案成長而越來越麻煩，所以要儘早啟用它。

建議使用 `strictNullCheckss`，防止「undefined is not an object」執行期錯誤。
```json
"strictNullCheckss": true
```