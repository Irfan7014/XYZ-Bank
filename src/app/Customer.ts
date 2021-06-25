export class Customer{
    customerId: number
    fName: string
    lName: string
    postCode: string
    accounts: Array<Account>
}
export interface Account{
    accNo: number
    currency: string
    amount: number
    transactions: Array<Transaction>
}
export interface Transaction{
    transaction_id: number
    date_time: Date
    amount: number
    type: string
}
