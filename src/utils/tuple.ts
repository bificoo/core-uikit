// https://stackoverflow.com/questions/46176165/ways-to-get-string-literal-type-of-array-values-without-enum-overhead
type TPrimitive = string | number | boolean | undefined | null | void

export const tuple = <T extends TPrimitive[]>(...args: T): T => args

export default tuple
