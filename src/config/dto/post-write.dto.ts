import { IsString, IsDefined, IsEmail } from 'class-validator';

export class WriteDto {
  @IsString()
  @IsDefined()
  title: string;

  @IsString()
  @IsDefined()
  context: string;

  @IsEmail()
  @IsDefined()
  writer: string;
}
