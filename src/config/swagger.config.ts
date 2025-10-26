import { SwaggerConfig } from '@app/core/docs/swagger.interface';
import { registerAs } from '@nestjs/config';

export const SWAGGER_CONFIG: SwaggerConfig = {
  title: 'nest Porto Ahmad',
  description: 'description swagger',
  version: '1.0',
  tags: [],
};

export default registerAs(
  'swagger',
  (): Record<string, any> => ({
    path: process.env.SWAGGER_PATH,
  }),
);
