import { Document } from 'mongoose';

export interface User extends Document {
  readonly username: string;
  readonly mobile: string;
  readonly password: string;
}