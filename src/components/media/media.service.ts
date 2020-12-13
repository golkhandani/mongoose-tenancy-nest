import { Inject, Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { Model } from 'mongoose';
import { Media, MediaDocument } from './schema/media.schema';

@Injectable()
export class MediaService {
    constructor(
        @Inject("Media_Model") private readonly mediaModel: Model<MediaDocument>,
    ) { }

    async findOne() {
        const result = await this.mediaModel.findOne();
        return result.toJSON();
    }
    async createMedia() {
        const media: Partial<Media> = {
            region: "es-us",
            bucket: "fabizi",
            etag: "1235213154132",
            key: "key",
            path: "google.com/png.png"
        }
        const result = await this.mediaModel.create(media)
        return result
    }

    async deleteOneById() {
        return await this.mediaModel.findByIdAndSoftDelete("3baea783-8da8-4ae7-91ff-48d8503a416e");
    }


}