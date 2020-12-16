import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { MediaModule } from './components/management/media/media.module';
import { CountryModule } from './components/administer/country/country.module';
import { LanguageModule } from './components/administer/language/language.module';
import { RolePermissionModule } from './components/management/role-permission/role-permission.module';

@Module({
  imports: [
    CommonModule,
    MediaModule,
    CountryModule,
    LanguageModule,
    RolePermissionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
