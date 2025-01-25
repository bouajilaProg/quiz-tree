import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ObjectId } from "mongoose";


@Schema()
export class User {
  _id: ObjectId;

  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true, default: false })
  subscribed: boolean;

  @Prop()
  endOfSubscription: Date;

  @Prop()
  subscriptionType: string;


}

export const UserSchema = SchemaFactory.createForClass(User);
