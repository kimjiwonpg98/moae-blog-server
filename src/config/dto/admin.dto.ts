import { IsBoolean, IsDefined, IsEmail } from 'class-validator';

export class AddAdminDto {
  @IsEmail()
  @IsDefined()
  email: string;

  @IsDefined()
  @IsBoolean()
  flag: boolean;
}
