import type { Equal, Expect, ExpectFalse } from '@type-challenges/utils'
// TODO
type cases = [
  Expect<Equal<PermutationsOfTuple<[]>, []>>,
  Expect<Equal<PermutationsOfTuple<[any]>, [any]>>,
  Expect<Equal<PermutationsOfTuple<[any, unknown]>, [any, unknown] | [unknown, any]>>,
  Expect<Equal<
    PermutationsOfTuple<[any, unknown, never]>,
    | [any, unknown, never]
    | [unknown, any, never]
    | [unknown, never, any]
    | [any, never, unknown]
    | [never, any, unknown]
    | [never, unknown, any]
  >>,
  Expect<Equal<
    PermutationsOfTuple<[1, number, unknown]>,
    | [1, number, unknown]
    | [1, unknown, number]
    | [number, 1, unknown]
    | [unknown, 1, number]
    | [number, unknown, 1]
    | [unknown, number, 1]
  >>,
  ExpectFalse<Equal<PermutationsOfTuple<[ 1, number, unknown ]>, [unknown]>>,
]


type PermutationsOfTuple<T extends unknown[], Head extends any[] = [], Tail extends any[] = T> =  
  T extends []
    ? []                                            
    : Tail extends [infer F, ...infer R]            
      ? [F, ...PermutationsOfTuple<[...Head, ...R]>]
        | PermutationsOfTuple<T, [...Head, F], R>   
      : never

// type ExcludeArr<T, K> = T extends [infer F, ...infer R] ?
//   Equal<F, K> extends true ? [...ExcludeArr<R, K>] : [F, ...ExcludeArr<R, K>]
//   : []
// type PermutationsOfTuple<T, U = T> = U extends [infer F, ...infer R] ?
//   [F, ...PermutationsOfTuple<T, R>] | [...PermutationsOfTuple<T, R>, F]
//   : []



// type PickOne<T extends any[], Prefix extends any[] = []> = 
//   T extends [infer Head, ...infer Tail]
//     ? [Head, [...Prefix, ...Tail]] | PickOne<Tail, [...Prefix, Head]>
//     : never

// type PermutationsOfTuple<T extends any[]> = 
//   T extends []
//     ? []
//     : PickOne<T> extends infer Item // 1. 赋值给 Item 变量
//       ? Item extends [infer Head, infer Rest extends any[]] // 2. Item 作为裸参数，成功触发分发机制！
//         ? [Head, ...PermutationsOfTuple<Rest>]
//         : never
//       : never

