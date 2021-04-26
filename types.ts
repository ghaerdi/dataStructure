export interface Element<T> {
  value: T
  parent?: Element<T>
  next?: Element<T>
  previous?: Element<T>
}
