import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { LoggerMiddleware } from './task/middleware/logger/logger.middleware';
import { AuthMiddleware } from './task/middleware/auth/auth.middleware';

@Module({
  imports: [TaskModule],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware).forRoutes('task');
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('task')
      .apply(AuthMiddleware)
      .forRoutes(
        {
          path: 'task/:id',
          method: RequestMethod.GET,
        },
        {
          path: 'task',
          method: RequestMethod.POST,
        },
      );
  }
}
