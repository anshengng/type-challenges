import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<CheckRepeatedChars<'abc'>, false>>,
  Expect<Equal<CheckRepeatedChars<'abb'>, true>>,
  Expect<Equal<CheckRepeatedChars<'cbc'>, true>>,
  Expect<Equal<CheckRepeatedChars<''>, false>>,
]
type CheckRepeatedChars<T, U extends any[]=[]> = T extends `${infer L}${infer R}` ? 
L extends U[number] ? true : CheckRepeatedChars<R, [...U, L]> :
false
