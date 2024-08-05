import { Client, GatewayIntentBits } from 'discord.js';

export class DiscordProvider {
  private static client: Client;

  private constructor() {}

  static getInstance(): Client {
    if (!this.client) {
      this.client = new Client({
        intents: [
          GatewayIntentBits.Guilds,
          GatewayIntentBits.GuildMessages,
          GatewayIntentBits.GuildModeration,
          GatewayIntentBits.MessageContent,
          GatewayIntentBits.GuildMembers,
        ],
      });
    }

    return this.client;
  }
}
