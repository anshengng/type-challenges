import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Unique<[1, 1, 2, 2, 3, 3]>, [1, 2, 3]>>,
  Expect<Equal<Unique<[1, 2, 3, 4, 4, 5, 6, 7]>, [1, 2, 3, 4, 5, 6, 7]>>,
  Expect<Equal<Unique<[1, 'a', 2, 'b', 2, 'a']>, [1, 'a', 2, 'b']>>,
  Expect<Equal<Unique<[string, number, 1, 'a', 1, string, 2, 'b', 2, number]>, [string, number, 1, 'a', 2, 'b']>>,
  Expect<Equal<Unique<[unknown, unknown, any, any, never, never]>, [unknown, any, never]>>,
]

type Includes<T extends any[], U> = T extends [infer L, ...infer R]
  ? Equal<L, U> extends true
    ? true
    : Includes<R, U>
  : false;

// 2. 实现 Unique
type Unique<T, U extends any[] = []> = T extends [infer L, ...infer R]
  ? Includes<U, L> extends true
    ? Unique<R, U>
    : Unique<R, [...U, L]>
  : U;
