export type WithChildren = { children?: React.ReactNode }

export type ReplaceClassNameFromHTMLElement<T> = Omit<T, "className"> & {
  className?: string | { [key: string]: boolean }
}

type AsComponentType<T> = {
  as?: React.ComponentType<T> | string
}

export type CommonComponent<T> = ReplaceClassNameFromHTMLElement<T>
export type CommonComponentWithAs<T, U> = ReplaceClassNameFromHTMLElement<T> & AsComponentType<U>
