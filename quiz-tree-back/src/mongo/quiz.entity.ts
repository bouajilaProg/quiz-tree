
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ObjectId } from "mongoose";



@Schema()
export class Quiz {
  _id: ObjectId;

  @Prop({ required: true })
  topic: string;

  @Prop({ required: true })
  code: string;

  @Prop({ required: true })
  difficulty: string;

  @Prop({ required: true })
  uploaded: string;

  @Prop({ required: true })
  questionsCount: number;

  @Prop({ required: true })
  avgScore: number;

  @Prop({ required: true })
  questions: string[];

  @Prop({ required: true })
  correctOptions: number[][];

  @Prop({ required: true })
  options: string[];

}

export const UserSchema = SchemaFactory.createForClass(Quiz);
