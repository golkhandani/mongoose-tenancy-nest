import { Prop, Schema as MongooseSchema, SchemaFactory } from '@nestjs/mongoose';

@MongooseSchema({
  _id: false
})
export class GeoLocation {
  @Prop({
    $type: Number
  })
  // @Exclude()
  Lat: number

  @Prop({
    $type: Number
  })
  Lng: number
}

export const geoLocationSchema = SchemaFactory.createForClass(GeoLocation);
