import { IBaseRepository } from '../interfaces/repository';

export abstract class BaseRepository<T> implements IBaseRepository<T> {
    public abstract find(query: any): Promise<T[]>;
    public abstract findById(id: string): Promise<T>;
    public abstract updateOne(query: any): Promise<T>;
    public abstract updateById(query: any): Promise<T>;
    public abstract findAndSoftDelete(query: any): Promise<T>;
    public abstract findAndHardDelete(query: any): Promise<T>;
    public abstract createNew(query: any): Promise<T>;
    public abstract updateMany(query: any): Promise<T>;
}