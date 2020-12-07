import { Controller, Get } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller(OrderController.path)
export class OrderController {
    public static path = "Order";
    constructor(
        private readonly orderService: OrderService
    ) { }

    @Get()
    async get() {
        return this.orderService.get();
    }

}