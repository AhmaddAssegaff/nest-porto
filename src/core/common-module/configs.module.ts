import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configs from '@config/index';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: configs,
      isGlobal: true,
      cache: true,
      envFilePath: ['.env'],
      expandVariables: true,
      validationSchema: Joi.object({
        APP_ENV_MODE: Joi.string()
          .valid('development', 'staging', 'production')
          .required(),
        APP_PORT: Joi.number().required(),
        GLOBAL_API_PREFIX: Joi.string().required(),
        ENABLE_VERSION: Joi.boolean().required(),
        VERSION_PREFIX: Joi.string().required(),
        DEFAULT_VERSION: Joi.number().required(),
      }),
      validationOptions: {
        abortEarly: true,
        allowUnknown: true,
      },
    }),
  ],
})
export class ConfigsModule {}
