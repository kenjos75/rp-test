import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiControllerController } from './controllers/api-controller/api-controller.controller';
import { ApiServiceService } from './services/api-service/api-service.service';
import { TestService } from './services/test/test.service';
import { TestController } from './controllers/test/test.controller';

@Module({
  imports: [],
  controllers: [AppController, ApiControllerController, TestController],
  providers: [AppService, ApiServiceService, TestService],
})
export class AppModule {}
