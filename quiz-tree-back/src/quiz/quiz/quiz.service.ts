import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Quiz } from 'src/mongo/quiz.entity';

@Injectable()
export class QuizService {

  constructor(@InjectModel("Quiz") private quiz: Model<Quiz>) { }

  async getQuizById(quizId: string) {
    return await this.quiz.findById(quizId);
  }


}
