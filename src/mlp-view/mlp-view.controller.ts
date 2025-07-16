import { Controller, Get, Render } from '@nestjs/common';

@Controller('mlp')
export class MlpViewController {
  @Get()
  @Render('mlp-view')
  root() {
    return { message: 'Predicción MLP' };
  }
}
