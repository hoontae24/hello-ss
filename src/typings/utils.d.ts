/** 객체, 배열의 값의 타입만 추출하는 제너릭 타입 함수 */
export type ValueOf<T> = T extends ReadonlyArray<infer ElementType> ? ElementType : T[keyof T];
