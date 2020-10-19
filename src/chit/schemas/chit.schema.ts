import * as mongoose from 'mongoose';

export const ChitSchema = new mongoose.Schema({
  chitname: {
    type: String,
  },
  chitvalue: {
    type: Number,
  },
  member_allowed: {
    type: Number,
  },
  splitamount: {
    type: Number,
  },
  start_bid_rate: {
    type: Number,
  },
  number_of_bid_per: {
    type: Number,
  },
  bid_start_date: {
    type: Date,
  },
  created_at: {
    type: Date,
  },

});