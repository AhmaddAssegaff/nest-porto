import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { VersioningType } from '@nestjs/common';
import { createDocument } from '@core/docs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  const appPort = configService.get<string>('app.appPort')!;
  const envMode = configService.get<string>('app.envMode')!;

  const globalPrefix = configService.get<string>('app.globalPrefix')!;

  const enableVersion = configService.get<string>('app.enableVersion')!;
  const versionPrefix = configService.get<string>('app.versionPrefix')!;
  const defaultVersion = configService.get<string>('app.defaultVersion')!;

  app.setGlobalPrefix(globalPrefix);

  if (enableVersion === 'true') {
    app.enableVersioning({
      type: VersioningType.URI,
      defaultVersion,
      prefix: versionPrefix,
    });
  }

  if (envMode !== 'production') {
    createDocument(app);
  }

  await app.listen(appPort);
}
bootstrap();
