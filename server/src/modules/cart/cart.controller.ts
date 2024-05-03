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
import { Cart, carts } from '../../types/cart';
import products from '../../types/products';

@Controller('cart')
export class CartController {
  constructor() {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async index(@Request() req): Promise<Cart> {
    return carts[req.user.userId] ?? { cartItems: [] };
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Request() req, @Body() { id }: { id: string }): Promise<Cart> {
    const cart = carts[req.user.userId];
    const cartItem = cart.cartItems.find(
      (cartItem) => cartItem.id === parseInt(id),
    );
    if (cartItem != null) {
      cartItem.quantity++;
    } else {
      const product = products.find((product) => product.id === parseInt(id));
      if (product != null) {
        cart.cartItems.push({
          ...product,
          quantity: 1,
        });
      }
    }

    return cart;
  }

  @Delete()
  @UseGuards(JwtAuthGuard)
  async destroy(@Request() req): Promise<Cart> {
    carts[req.user.userId] = { cartItems: [] };
    return carts[req.user.userId];
  }
}
