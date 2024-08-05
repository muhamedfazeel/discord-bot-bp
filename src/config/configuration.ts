import { registerAs } from '@nestjs/config';

const env = process.env;

export default registerAs('config', () => ({
  server: {
    env: env.NODE_ENV,
  },
  discord: {
    token: env.BOT_TOKEN,
  },
}));
