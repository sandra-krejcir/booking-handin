import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { BookingDto } from './../src/bookings/entities/create-booking.dto';

describe('BookingController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should create a new valid booking (POST)', async () => {
    const booking = new BookingDto('Christian', 5, new Date(), '12345678', 
        'kirs@cphbusiness.dk', 'We are alergic to nuts');
    
    const {body} = await request(app.getHttpServer())
      .post('/bookings')
      .send(booking)
      .expect(201)
      
      expect(body.name).toEqual('Christian');
  });

  afterAll(() => {
    app.close();
  });
});
