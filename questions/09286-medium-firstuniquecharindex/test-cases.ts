import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<FirstUniqueCharIndex<'leetcode'>, 0>>,
  Expect<Equal<FirstUniqueCharIndex<'loveleetcode'>, 2>>,
  Expect<Equal<FirstUniqueCharIndex<'aabb'>, -1>>,
  Expect<Equal<FirstUniqueCharIndex<''>, -1>>,
  Expect<Equal<FirstUniqueCharIndex<'aaa'>, -1>>,
]

type FirstUniqueCharIndex<
  T extends string,
  U extends string[] = []
> = T extends `${infer L}${infer R}` ?
  L extends U[number] ? FirstUniqueCharIndex<R, [...U, L]> :
  R extends `${string}${L}${string}` ? FirstUniqueCharIndex<R, [...U, L]> : U['length']
: -1