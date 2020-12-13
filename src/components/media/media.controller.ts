import { ClassSerializerInterceptor, Controller, Delete, Get, Post, UseInterceptors } from '@nestjs/common';
import { TransformPlainToClass } from 'class-transformer';
import { MediaService } from './media.service';
import { Media } from './schema/media.schema';

@Controller('Media')
export class MediaController {
    constructor(
        private readonly mediaService: MediaService,
    ) { }

    @Get()
    @TransformPlainToClass(Media)
    async getAllMedia(): Promise<Media> {
        return await this.mediaService.findOne();
    }

    @Post()
    async createMedia() {
        return this.mediaService.createMedia();
    }

    @Delete()
    async softDelete() {
        return this.mediaService.deleteOneById();
    }
}