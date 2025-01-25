import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { SubscriptionController } from './subscription/subscription.controller';
import { UserQuizController } from './user-quiz/user-quiz.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/mongo/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])
    , JwtModule.registerAsync({
      useFactory: async (configService: ConfigService) => ({
        global: true,
        secret: configService.get('JWT_SECRET'),
        signOptions: { expiresIn: '1d' },
      }),

      inject: [ConfigService],
    })

  ],
  providers: [AuthService],
  controllers: [AuthController, SubscriptionController, UserQuizController],

})
export class UserModule { }
