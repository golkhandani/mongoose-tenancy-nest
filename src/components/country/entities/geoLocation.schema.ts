import { Prop, Schema as MongooseSchema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude, Expose } from 'class-transformer';

@MongooseSchema({
  _id: false
})
export class GeoLocation {
  // @Prop({
  //   type: Number
  // })
  // @Exclude()
  lat: number

  @Prop({
    type: Number
  })
  @Expose()
  long: number
}

export const geoLocationSchema = SchemaFactory.createForClass(GeoLocation);
