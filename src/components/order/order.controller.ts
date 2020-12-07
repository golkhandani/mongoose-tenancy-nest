import { Controller, Get } from '@nestjs/common';

@Controller(OrderController.path)
export class OrderController {
    public static path = "Order";
    constructor() { }

    @Get()
    async get() {
        return "ok";
    }

}