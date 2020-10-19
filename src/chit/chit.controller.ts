import { Controller, Res, Query, Get, HttpStatus, Post, Body, Param, NotFoundException, Put, Delete } from '@nestjs/common';
import { ChitService } from './chit.service';
import { ChitDto } from './dto/chit.dto';

@Controller('chit')
export class ChitController {
constructor(private readonly ChitService: ChitService) {}
@Post('/create')
async addCustomer(@Res() res, @Body() ChitDto: ChitDto) {
const lists = await this.ChitService.create(ChitDto);
return res.status(HttpStatus.OK).json({
message: "Post has been created successfully",
lists
})
}
@Get('all')
async findAll(@Res() res) {
const lists = await this.ChitService.findAll();
return res.status(HttpStatus.OK).json(lists);
}
@Get('id')
async findById(@Res() res, @Query('id') id: string) {
const lists = await this.ChitService.findById(id);
if (!lists) throw new NotFoundException('Id does not exist!');
return res.status(HttpStatus.OK).json(lists);
}
@Put('/update')
async update(@Res() res, @Query('id') id: string, @Body() ChitDto: ChitDto) {
const lists = await this.ChitService.update(id, ChitDto);
if (!lists) throw new NotFoundException('Id does not exist!');
return res.status(HttpStatus.OK).json({
message: 'Post has been successfully updated',
lists
});
}
@Delete('/delete')
async delete(@Res() res, @Query('id') id: string) {
const lists = await this.ChitService.delete(id);
if (!lists) throw new NotFoundException('Post does not exist');
return res.status(HttpStatus.OK).json({
message: 'Post has been deleted',
lists
})
}
}