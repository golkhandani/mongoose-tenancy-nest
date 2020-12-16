import { Prop, Schema as MongooseSchema, SchemaFactory } from '@nestjs/mongoose';

@MongooseSchema({
  _id: false
})
export class GeoLocation {
  @Prop({
    type: Number
  })
  // @Exclude()
  lat: number

  @Prop({
    type: Number
  })
  long: number
}

export const geoLocationSchema = SchemaFactory.createForClass(GeoLocation);
