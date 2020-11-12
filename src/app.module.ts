import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiControllerController } from './controllers/api-controller/api-controller.controller';

@Module({
  imports: [],
  controllers: [AppController, ApiControllerController],
  providers: [AppService],
})
export class AppModule {}
