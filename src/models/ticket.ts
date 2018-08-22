export interface Ticket{
    userUid: string;
    uid: string;
    from: string;
    to: string;
    number: number;
    class: string;
    price: number;
    date: string;
    passenger: string;
    paymentmethod: string;
    expired: boolean;
}