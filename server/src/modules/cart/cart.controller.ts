import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';

import products, { Product } from '../../products';

interface CartItem extends Product {
  quantity: number;
}

interface Cart {
  cartItems: CartItem[];
}

const initialCart = (indexes: number[]): Cart => {
  return {
    cartItems: indexes.map((index) => ({
      ...products[index],
      quantity: 1,
    })),
  };
};

@Controller('cart')
export class CartController {
  private carts: Record<number, Cart> = {
    1: initialCart([0, 2, 4]),
    2: initialCart([1, 3, 5]),
  };
  constructor() {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async index(@Request() req): Promise<Cart> {
    return this.carts[req.user.userId] ?? { cartItems: [] };
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Request() req, @Body() { id }: { id: string }): Promise<Cart> {
    const cart = this.carts[req.user.userId];

    if (!cart) {
      this.carts[req.user.userId] = {
        cartItems: [
          {
            ...products.find((item) => item.id === parseInt(id)),
            quantity: 1,
          },
        ],
      };
    } else {
      const cartItem = cart.cartItems.find((item) => {
        return item.id === parseInt(id);
      });

      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        cart.cartItems.push({
          ...products.find((item) => item.id === parseInt(id)),
          quantity: 1,
        });
      }
    }

    return this.carts[req.user.userId];
  }

  @Delete()
  @UseGuards(JwtAuthGuard)
  async delete(@Request() req): Promise<Cart | null> {
    const userID = req.user.userId;
    const cart = this.carts[userID];

    if (!cart) return { cartItems: [] };

    this.carts[userID] = { cartItems: [] };

    return this.carts[userID];
  }
}
