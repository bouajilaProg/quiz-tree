import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/mongo/user.entity';

@Injectable()
export class AuthService {

  constructor(
    @InjectModel('User') private userModel: Model<User>,  // Use @InjectModel with 'User'
    private jwtService: JwtService
  ) { }

  // function to login
  async login(email: string, password: string) {
    if (!email || !password) {
      throw new Error('Email and password are required');
    }

    const user = await this.userModel.findOne({ email, password });
    if (!user) {
      throw new Error('Invalid credentials');
    }
    return { token: this.jwtService.sign({ user: user.username }), username: user.username };
  }

  // function to signup 
  async signup(email: string, password: string, username: string) {
    if (!email || !password) {
      throw new Error('Email and password are required');
    }

    const user = await this.userModel.findOne({ email });
    if (user) {
      throw new Error('User already exists');
    }

    this.userModel.create({ email, password, username })
    return { token: this.jwtService.sign({ user: username }), username: username };
  }

  // function to get the user name from the token
  async me(token: string) {
    const { user } = this.jwtService.verify(token);
    return { user: user };
  }



}
