import { Module } from '@nestjs/common';
import { MlpViewController } from './mlp-view.controller';

@Module({
  controllers: [MlpViewController],
})
export class MlpViewModule {}
