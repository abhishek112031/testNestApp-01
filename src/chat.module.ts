import { Module } from '@nestjs/common';
import { Feature3 } from './feature3.module';
import { CustomersModule } from './customers/customers.module';


@Module({
  imports: [Feature3, CustomersModule],
  controllers: [],
  providers: [],
  exports:[]
})

export class ChatModule {
  constructor(){
    console.log('Chat Module');
  }
}
