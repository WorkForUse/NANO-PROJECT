import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Url } from './entities/url.entity';
import { nanoid } from 'nanoid';

@Injectable()
export class UrlService {
  constructor(
    @InjectRepository(Url)
    private urlRepository: Repository<Url>,
  ) {}

  async shorten(longUrl: string) {
    const code = nanoid(6);
    const newUrl = this.urlRepository.create({ longUrl, code });
    return await this.urlRepository.save(newUrl);
  }

  async getOriginalUrl(code: string) {
    const urlEntry = await this.urlRepository.findOne({ where: { code } });
    if (!urlEntry) throw new NotFoundException('Short URL not found');
    return urlEntry.longUrl;
  }
}