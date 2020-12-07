import { IRepository } from './repository.interface';

export abstract class AbstractRepository implements IRepository<any> {
  constructor(private readonly model, private readonly connection) {}

  getModel(tenantDatabaseName: string) {
    const model = this.connection
      .useDb(tenantDatabaseName)
      .model(this.model.name, this.model.Schema);

    return {
      async findOne(id: number) {},
      async findOneByOrderId(orderId: number) {
        return "salam, man inja mikham chizaye ezafe ro pak konam va dg majboor nasham connection ro inject konam"
      },
      async findAll() {},
      async store(params: object) {
        return await model.create(params)
      }
    };
  }
}
