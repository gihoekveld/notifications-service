import { OnModuleDestroy } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['pleasing-lamb-9917-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'cGxlYXNpbmctbGFtYi05OTE3JPxPT55XcxkHACtwHJvJRLg_wgBX1Ct-eDVUPmg',
          password:
            'tDO9clPY6I9DARK91y1rqv2VUmP9pDV2ae2v8IGEucL4wt2KW_xUSyIQVlnh2kx0QP6U4w==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
