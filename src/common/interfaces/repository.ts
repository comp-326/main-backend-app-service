/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IBaseRepository<T> {
	find: (query: any) => Promise<any>;
	findById: (id: string) => Promise<any>;
	updateOne: (query: any) => Promise<any>;
	updateById: (query: any) => Promise<any>;
	findAndSoftDelete: (query: any) => Promise<any>;
	findAndHardDelete: (query: any) => Promise<any>;
	createNew: (query: any) => Promise<any>;
	updateMany: (query: any) => Promise<any>;
}
