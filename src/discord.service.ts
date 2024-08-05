import { CustomLogger } from '@common/logger/custom-logger.service';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { Client, Events } from 'discord.js';
import { DiscordProvider } from './discord.provider';

@Injectable()
export class DiscordService implements OnModuleInit {
  private client: Client;

  constructor(private readonly logger: CustomLogger) {
    this.logger.setContext(DiscordService.name);
  }

  async onModuleInit() {
    this.client = DiscordProvider.getInstance();
    this.init();
  }

  async init() {
    this.client.on(Events.ClientReady, async () => {
      this.logger.log(`Logged in as ${this.client.user.tag}`);
    });
  }
}
