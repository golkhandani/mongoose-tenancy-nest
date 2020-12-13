import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';
import { MediaController } from './media.controller';
import { mediaProviders } from './media.provider';
import { MediaService } from './media.service';

@Module({
    imports: [
        CommonModule,
    ],
    controllers: [
        MediaController
    ],
    providers: [
        MediaService,
        ...mediaProviders
    ],
})
export class MediaModule { };