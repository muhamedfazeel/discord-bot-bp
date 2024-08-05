import { ConfigService } from '@nestjs/config';
import { CustomLogger } from './common/logger/custom-logger.service';
import { NestFactory } from '@nestjs/core';
import { DiscordModule } from './discord.module';
import { DiscordProvider } from './discord.provider';

async function bootstrap() {
  const logger = new CustomLogger('Main');
  const app = await NestFactory.create(DiscordModule);
  const config = app.get<ConfigService>(ConfigService);
  const client = DiscordProvider.getInstance();
  const env = config.get('config.server.env');
  const token = config.get('config.discord.token');

  client.login(token);
  logger.log(`Application is running in ${env} environment`);
}
bootstrap();
