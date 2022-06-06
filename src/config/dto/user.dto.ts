import { IsString, IsDefined, IsEmail, IsNumber } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsDefined()
  nickname: string;

  @IsEmail()
  @IsDefined()
  email: string;

  @IsNumber()
  @IsDefined()
  year: number;
}
