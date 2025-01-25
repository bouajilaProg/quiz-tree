import { Controller, Get, Query } from '@nestjs/common';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {

  constructor(private quizService: QuizService) { }

  @Get("single")
  async getQuizById(@Query('quizId') quizId: string) {
    return { quiz: await this.quizService.getQuizById(quizId) };
  }

}
