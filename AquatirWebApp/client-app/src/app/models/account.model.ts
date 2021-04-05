import { Goo } from './goo.model';

export interface Account {
    accountId?: number;
    uGoo: number;
    accountName: string;
    wrGoo?: Goo;
}