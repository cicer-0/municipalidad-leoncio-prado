import { Controller, Get, Post, Render, Body } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Controller('mlp')
export class MlpViewController {
  constructor(private readonly usersService: UsersService) {}

  // Ruta para mostrar la vista con todos los usuarios
  @Get()
  @Render('mlp-view')
  async getUsers() {
    const users = await this.usersService.getUsers();  // Obtener usuarios de la base de datos
    return { users };  // Pasar los usuarios a la vista
  }

  // Ruta para manejar el formulario de creación de usuario
  @Post('create')
  async createUser(@Body() body: { name: string, email: string }) {
    await this.usersService.createUser(body.name, body.email);  // Crear usuario en la base de datos
    return { message: 'Usuario creado exitosamente' };  // Redirigir o mostrar un mensaje
  }
}
