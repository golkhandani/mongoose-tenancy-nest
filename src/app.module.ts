import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './components/order/order.module';
import { CommonModule } from './common/common.module';
import { MediaModule } from './components/media/media.module';
import { CountryModule } from './components/country/country.module';
import { LanguageModule } from './components/language/language.module';
import { RolePermissionModule } from './components/role-permission/role-permission.module';

@Module({
  imports: [
    CommonModule,
    MediaModule,
    OrderModule,
    CountryModule,
    LanguageModule,
    RolePermissionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
