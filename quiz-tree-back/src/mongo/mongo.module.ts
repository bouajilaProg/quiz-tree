import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

const uri = 'mongodb://localhost:27017/nest';

@Module({
  imports: [MongooseModule.forRoot(uri)],

})
export class MongoModule { }
