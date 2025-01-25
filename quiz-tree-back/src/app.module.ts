import { Module } from '@nestjs/common';
import { MongoModule } from './mongo/mongo.module';
import { UserModule } from './user/user.module';
import { QuizModule } from './quiz/quiz.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [MongoModule, UserModule, QuizModule,
    ConfigModule.forRoot({
      isGlobal: true,
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
