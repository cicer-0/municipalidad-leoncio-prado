import { Controller, Get, Render } from '@nestjs/common';

@Controller('mlp')
export class MlpViewController {
  @Get()
  @Render('mlp-view')  // Renderiza el archivo 'mlp-view.html'
  root() {
    return { message: 'Predicción MLP' };
  }
}
