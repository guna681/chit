
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Chit } from './interfaces/chit.interface';
import { ChitDto } from './dto/Chit.dto';
@Injectable()
export class ChitService {
constructor(@InjectModel('Chit') private AboutModel : Model<Chit>) {}
async create(ChitDto: ChitDto): Promise<any> {
const createdCat = new this.AboutModel(ChitDto);
return createdCat.save();
}
async findAll(): Promise<any> {
return await this.AboutModel.find().exec();
}
async findById(id): Promise<Chit> {
const customer = await this.AboutModel.findById(id).exec();
return customer;
}
async find(req): Promise<any> {
return await this.AboutModel.find(req).exec();
}
async update(id, CreateAboutDTO: ChitDto): Promise<any> {
return await this.AboutModel.findByIdAndUpdate(id, CreateAboutDTO, { new: true });
}
async delete(id): Promise<any> {
return await this.AboutModel.findByIdAndRemove(id);
}
}