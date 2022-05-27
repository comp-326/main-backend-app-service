/* eslint-disable @typescript-eslint/no-explicit-any */
import { IBaseRepository } from '../interfaces/repository';

export abstract class BaseRepository implements IBaseRepository {
    public abstract find(query: any): Promise<any>;
    public abstract findById(id: string): Promise<any>;
    public abstract updateOne(query: any): Promise<any>;
    public abstract updateById(query: any): Promise<any>;
    public abstract findAndSoftDelete(query: any): Promise<any>;
    public abstract findAndHardDelete(query: any): Promise<any>;
    public abstract createNew(query: any): Promise<any>;
    public abstract updateMany(query: any): Promise<any>;
}