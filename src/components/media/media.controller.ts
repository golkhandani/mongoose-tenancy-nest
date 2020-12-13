import { ClassSerializerInterceptor, Controller, Delete, Get, Post, UseInterceptors } from '@nestjs/common';
import { MediaService } from './media.service';

@Controller('Media')
export class MediaController {
    constructor(
        private readonly mediaService: MediaService,
    ) { }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get()
    async getAllMedia() {
        return this.mediaService.findOne();
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