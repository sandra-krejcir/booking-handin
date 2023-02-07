import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booking } from './entities/booking.entity';

@Module({
    imports:[TypeOrmModule.forFeature([Booking])],
    providers: [BookingsService],
    controllers: [BookingsController]
})
export class BookingsModule {
    
}
