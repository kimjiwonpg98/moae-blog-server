import { HttpException } from '@nestjs/common';

export default class HttpError extends HttpException {
  error: any;

  constructor(error: any, status: number) {
    super(error, status);
    this.error = error;
  }
}
