import { Body, Controller, Get, Headers, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('login')
  login(@Body() body: { email: string, password: string }) {
    return this.authService.login(body.email, body.password);
  }

  @Post('signup')
  signup(@Body() body: { email: string, password: string, username: string }) {
    return this.authService.signup(body.email, body.password, body.username);
  }


  //use GET with headers next time
  @Post("me")
  me(@Body() body: { token: string }) {
    return this.authService.me(body.token);
  }

}
