import { Document } from 'mongoose';
export interface Chit extends Document {
    readonly chitname: string;
    readonly chitvalue: number;
    readonly member_allowed: number;
    readonly splitamount :number;
    readonly start_bid_rate :number;
    readonly number_of_bid_per :number;
    readonly bid_start_date :string;
    readonly created_at :string;
   
}