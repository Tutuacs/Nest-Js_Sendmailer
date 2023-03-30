import { Body, Controller, Post } from '@nestjs/common';
import { CreateMailDto } from './dtos/create-mail.dto';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private readonly service: MailService) {}

  @Post()
  async sendMail(@Body() mail: CreateMailDto) {
    return this.service.sendmail(mail);
  }
}
