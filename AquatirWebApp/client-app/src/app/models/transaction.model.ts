import { Account } from './account.model';

export interface Transaction {
    transactionId?: number;
    accountId: number;
    accounts?: Account;
    ammount: number;
    io: boolean;
    transactionDate: Date;
}