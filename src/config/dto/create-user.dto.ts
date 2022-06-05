import { IsString, IsDefined, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsDefined()
  nickname: string;

  @IsEmail()
  @IsDefined()
  email: string;
}
