import { Module } from '@nestjs/common';
//modules
import { UsersModule } from './users.module';
import { OrdersModule } from './orders.module';
import { ChatModule } from './chat.module';

//controllers
import { BookController } from './app.controller';

//service/providers
import { BookService } from './book.service';


@Module({
  imports: [UsersModule,OrdersModule,ChatModule],
  controllers: [BookController],
  providers: [BookService],
  exports:[]
})

export class RootModule {
  constructor(){
    console.log('App Module(root)');
  }
}
