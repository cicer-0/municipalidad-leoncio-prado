import { Controller, Post, Get, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  async createUser(@Body() body: { name: string; email: string }) {
    return this.usersService.createUser(body.name, body.email);
  }

  @Get()
  async getUsers() {
    return this.usersService.getAllUsers();
  }
}
