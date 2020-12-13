import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './components/order/order.module';
import { CommonModule } from './common/common.module';
import { MediaModule } from './components/media/media.module';
import { CountryModule } from './components/country/country.module';

@Module({
  imports: [
    CommonModule,
    MediaModule,
    OrderModule,
    CountryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
