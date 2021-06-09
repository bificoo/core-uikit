export type WithChildren = { children?: React.ReactNode }

export type ReplaceClassNameFromHTMLElement<T> = Omit<T, "className"> & {
  /** 自定義 class */
  className?: string | { [key: string]: boolean }
}
