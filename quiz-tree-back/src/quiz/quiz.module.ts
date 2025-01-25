import { Module } from '@nestjs/common';
import { AdminController } from './admin/admin.controller';
import { QuizController } from './quiz/quiz.controller';

@Module({
  controllers: [AdminController, QuizController]
})
export class QuizModule {}
