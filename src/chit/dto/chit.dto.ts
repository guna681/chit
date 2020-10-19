import { IsString, MaxLength, MinLength } from 'class-validator';

export class ChitDto {
  @IsString()
  chitname: string;
}