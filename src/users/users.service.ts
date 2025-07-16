import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  // Crear un nuevo usuario
  async createUser(name: string, email: string): Promise<User> {
    const user = this.usersRepository.create({ name, email });
    return this.usersRepository.save(user);
  }

  // Obtener todos los usuarios
  async getAllUsers(): Promise<User[]> {
    return this.usersRepository.find();
  }
}
