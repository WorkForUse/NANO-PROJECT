import { Controller, Post, Get, Body, Param, Redirect, NotFoundException } from '@nestjs/common';
import { UrlService } from './url.service';
import { CreateUrlDto } from './dto/create-url.dto';

@Controller()
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @Post('shorten')
  async shorten(@Body() createUrlDto: CreateUrlDto) {
    return await this.urlService.shorten(createUrlDto.longUrl);
  }

  @Get(':code')
  @Redirect()
  async redirect(@Param('code') code: string) {
    const originalUrl = await this.urlService.getOriginalUrl(code);
    return { url: originalUrl, statusCode: 302 };
  }
}