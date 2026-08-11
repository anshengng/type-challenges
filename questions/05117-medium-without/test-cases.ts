import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Without<[1, 2], 1>, [2]>>,
  Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
  Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>,
]


type Without<T, K> = T extends [infer A, ...infer B] ?
  [A] extends [K extends any[] ? K[number] : K] ? Without<B, K> : [A, ...Without<B, K>] :
  []