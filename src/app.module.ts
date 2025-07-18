import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';
import { MlpViewModule } from './mlp-view/mlp-view.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '192.168.3.5', // IP del servidor de la base de datos
      port: 3306,
      username: 'server_db',
      password: '!MyStrongPass123#', // La contraseña del usuario creado
      database: 'test', // Nombre de la base de datos que usarás
      entities: [User], // Asegúrate de incluir la entidad User aquí
      synchronize: true, // Solo en desarrollo
    }),
    UsersModule,
    MlpViewModule, // Importa el módulo de usuarios
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
