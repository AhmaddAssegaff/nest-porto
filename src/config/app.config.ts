import { registerAs } from '@nestjs/config';

export default registerAs(
  'app',
  (): Record<string, any> => ({
    envMode: process.env.APP_ENV_MODE,
    appPort: process.env.APP_PORT,
    globalPrefix: process.env.GLOBAL_API_PREFIX,
    enableVersion: process.env.ENABLE_VERSION,
    versionPrefix: process.env.VERSION_PREFIX,
    defaultVersion: process.env.DEFAULT_VERSION,
  }),
);
