import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { Booking } from './entities/booking.entity';
import { BookingDto } from './entities/booking.dto';

@Controller('bookings')
export class BookingsController {
  constructor(private bookingService: BookingsService) {}

  @Get()
  getAll(): Promise<Booking[]> {
    return this.bookingService.findAll();
  }
  @Post()
  create(@Body() bookingDto: BookingDto): Promise<Booking> {
    return this.bookingService.create(bookingDto);
  }
  @Put(':id')
  update(@Param() id, @Body() bookingDto: BookingDto): Promise<Booking> {
    return this.bookingService.update(id, bookingDto);
  }
  @Delete(':id')
  remove(@Param() id): Promise<Booking> {
    return this.bookingService.remove(id);
  }
}
