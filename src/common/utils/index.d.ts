/* eslint-disable @typescript-eslint/no-explicit-any */
export type TypeMapper<T> = {
	[K in keyof T]: T[K] extends undefined
		? never
		: T[K] extends (...args: any[]) => ReturnType<T[K]>
		? T[K]
		: never;
};
