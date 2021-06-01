// https://stackoverflow.com/questions/46176165/ways-to-get-string-literal-type-of-array-values-without-enum-overhead
export const tuple = <T extends string[]>(...args: T): string[] => args

export const tupleNum = <T extends number[]>(...args: T): number[] => args

export default tuple
