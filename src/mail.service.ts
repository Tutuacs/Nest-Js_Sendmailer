import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer/dist';
import { CreateMailDto } from './dtos/create-mail.dto';

@Injectable()
export class MailService {
  constructor(private readonly mailer: MailerService) {}

  async sendmail(body: CreateMailDto) {
    await this.mailer.sendMail({
      subject: 'Title Mail',
      to: body.email,
      template: 'index.example.ejs', //template: 'index',
      // context: {
      //     name: user.name,
      // }
    });
    return { msg: 'enviado com suscesso' };
  }
}
