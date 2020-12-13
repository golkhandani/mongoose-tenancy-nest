import { Inject, Injectable, Scope } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { v4 } from 'uuid';
import { AbstractRepository } from "../../common/repository/repository.abstract";
import { MenuItemDefinition, MenuItemDocument } from './schema/MenuItem';
import { Order, OrderDefinition, OrderDocument } from './schema/Order';
import { Table, TableDefinition, TableDocument } from './schema/Table';

@Injectable(
  {
    scope: Scope.REQUEST
  }
)
export class OrderService {
  constructor(
    @Inject("Order_Model") private readonly orderModel: Model<OrderDocument>,
    @Inject("Table_Model") private readonly tableModel: Model<TableDocument>,
    private readonly abstractRepository: AbstractRepository,
    @InjectModel(Order.name) private OrderModel: Model<OrderDocument>) {

  }

  async createNewOrder() {
    const table: Table = {
      name: "Goldan",
      status: "Avalilable",
      capacity: 3
    }
    const newTable = await this.tableModel.create(table);

    const order: Order = {
      orderId: 213412,
      totalPrice: 321,
      participant: [],
      sit: {
        table: newTable._id,
        checkInDateTime: new Date(),
      }
    }
    return await this.orderModel.create(order);
  }

  async getByTenant() {
    const orderId = 213412;
    console.log(orderId);

    // return await this.tenantModel.find().where({ orderId });

    const result = await this.orderModel
      .findOne(
        {
          orderId: orderId
        },
        // {
        //   "Id": 1,
        //   "orderId": 1,
        //   "participant.menuItems.count": 1,
        //   "participant.menuItems.menuItem": 1,
        // }
      )
      // .populate('sit.table')
      // .lean()
      .deepPopulate([
        'sit.table',
        // 'participant.user',
        // 'participant.menuItems.menuItem',
        // 'participant.menuItems.menuItem.recipes.recipe',
      ]).exec()
    console.log(result);

    return result
  }

  async getAggregation(tenant: string) {
    // const orderId = 5001;
    // //.log();
    // const orderCollection = this.abstractRepository.setTenant("Fabizi_1").db.collection("order");
    // const timer = Date.now();
    // const order = await orderCollection.aggregate([
    //   {
    //     $match: { orderId }
    //   },
    //   {
    //     $lookup:
    //     {
    //       from: "table",
    //       localField: "sit.table",
    //       foreignField: "_id",
    //       as: "sit.table"
    //     }
    //   },
    //   {
    //     $unwind: "$sit.table"
    //   },
    //   {
    //     $unwind: "$participant"
    //   },
    //   {
    //     $lookup:
    //     {
    //       from: "user",
    //       localField: "participant.user",
    //       foreignField: "_id",
    //       as: "participant.user"
    //     }
    //   },
    //   {
    //     $unwind: "$participant.user"
    //   },
    //   {
    //     $unwind: "$participant.menuItems"
    //   },
    //   {
    //     $lookup: {
    //       from: "menuItem",
    //       let: {
    //         menuItemId: "$participant.menuItems.menuItem",
    //         count: "$participant.menuItems.count",
    //         price: "$participant.menuItems.price",
    //         preprationTime: "$participant.menuItems.preprationTime"
    //       },
    //       pipeline: [
    //         {
    //           $match: {
    //             $expr: {
    //               $and: [
    //                 { $eq: ["$_id", "$$menuItemId"] },
    //               ]
    //             }
    //           },
    //         },
    //         // lots of recipes
    //         {
    //           $unwind: "$recipes"
    //         },
    //         // now each have one recipe
    //         {
    //           $lookup: {
    //             from: "recipe",
    //             let: { recipeId: "$recipes.recipe", amount: "$recipe.amount" },
    //             pipeline: [
    //               {
    //                 $match: {
    //                   $expr: {
    //                     $and: [
    //                       { $eq: ["$_id", "$$recipeId"] },
    //                     ]
    //                   }
    //                 },
    //               },
    //             ],
    //             as: "recipe"
    //           }
    //         },
    //         {
    //           $group: {
    //             _id: "$$menuItemId",
    //             count: { $first: "$$count" },
    //             price: { $first: "$$price" },
    //             preprationTime: { $first: "$$preprationTime" },
    //             recipe: { $push: { $first: "$recipe" } }
    //           }
    //         }
    //       ],
    //       as: "participant.menuItems"
    //     }
    //   },
    //   {
    //     $unwind: "$participant.menuItems"
    //   },
    //   {
    //     $group: {
    //       _id: "$participant.user",
    //       orderObjectId: { $first: "$_id" },
    //       orderId: { $first: "$orderId" },
    //       orderSit: { $first: "$sit" },
    //       orderTotalPrice: { $first: "$totalPrice" },

    //       participantUser: { $first: "$participant.user" },
    //       participantSubOrderId: { $first: "$participant.subOrderId" },
    //       participantCheckOutDateTime: { $first: "$participant.checkOutDateTime" },
    //       participantTotalPrice: { $first: "$participant.totalPrice" },

    //       participantMenuItems: { $push: "$participant.menuItems" }
    //     }
    //   },
    //   {
    //     $group: {
    //       _id: "$orderObjectId",
    //       orderId: { $first: "$orderId" },
    //       sit: { $first: "$orderSit" },
    //       totalPrice: { $first: "$orderTotalPrice" },
    //       participant: {
    //         $push: {
    //           user: "$participantUser",
    //           subOrderId: "$participantSubOrderId",
    //           checkOutDateTime: "$participantCheckOutDateTime",
    //           totalPrice: "$participantTotalPrice",
    //           menuItems: "$participantMenuItems"
    //         }
    //       }
    //     }
    //   }
    // ]).toArray().finally(() => console.log("*", Date.now() - timer))

    // return order
  }

  async get(tenant: string) {


    // const orderId = 5001;
    // //.log();
    // var tenantFake = "Fabizi_" + Math.floor((Math.random()) + 1)
    // console.log(tenantFake);
    // // return await this.OrderModel.db.useDb(tenant).collection("order").find().toArray()
    // return await this.abstractRepository.setTenant(tenantFake).getModel<OrderDocument>(OrderDefinition)
    //   .findOne(
    //     {
    //       orderId: orderId
    //     },
    //     {
    //       "_id": 1,
    //       "orderId": 1,
    //       "participant.menuItems.count": 1,
    //       "participant.menuItems.menuItem": 1,
    //     }
    //   )
    //   // .populate('sit.table')
    //   .lean()
    //   .deepPopulate([
    //     'sit.table',
    //     'participant.user',
    //     'participant.menuItems.menuItem',
    //     'participant.menuItems.menuItem.recipes.recipe',
    //   ]).exec()
  }
}