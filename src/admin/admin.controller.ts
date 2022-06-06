import { Body, Controller, Inject, Patch } from '@nestjs/common';
import { AddAdminDto } from 'src/config/dto/admin.dto';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(
    @Inject(AdminService)
    private readonly adminService: AdminService,
  ) {}

  @Patch('/')
  async addAdmin(@Body() body: AddAdminDto) {
    const result = await this.adminService.addAdmin(body);
    return result;
  }
}
