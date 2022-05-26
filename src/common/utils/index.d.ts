export type TypeMapper<T> = {
	[K in keyof T]: T[K]
}