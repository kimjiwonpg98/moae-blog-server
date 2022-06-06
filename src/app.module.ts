import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostWriteModule } from './post-write/post-write.module';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [TypeOrmModule.forRoot(), PostWriteModule, ConfigModule.forRoot(), UserModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
