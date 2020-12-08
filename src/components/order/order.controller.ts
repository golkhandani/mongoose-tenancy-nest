import { Controller, Get, Header, Headers } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller(OrderController.path)
export class OrderController {
    public static path = "Order";
    constructor(
        private readonly orderService: OrderService
    ) { }

    @Get("deep")
    async getDeep(
        @Headers("tenant") tenant: string
    ) {
        return this.orderService.get(tenant);
    }

    @Get("agg")
    async getAgg(
        @Headers("tenant") tenant: string
    ) {
        return this.orderService.getAggregation(tenant);
    }

    @Get("tenant")
    async getTenant(
        @Headers("tenant") tenant: string
    ) {
        return this.orderService.getByTenant();
    }

}