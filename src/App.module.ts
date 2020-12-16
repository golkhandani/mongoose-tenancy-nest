import { Module } from '@nestjs/common';
import { CommonModule } from '@Common/Common.module';
import { AppController } from '@Application/App.controller';
import { ManagementModule } from '@Management/Management.module';
import { AdministrationModule } from '@Administration/Administration.module';

@Module({
  imports: [
    CommonModule,
    AdministrationModule,
    ManagementModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
