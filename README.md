<p align="center">
  <a href="https://nestjs.com/" target="_blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Nano URL Shortener

[![NestJS](https://img.shields.io/badge/NestJS-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)](https://nestjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A high-performance URL shortening API built with **NestJS**. Shorten URLs to 6-char codes with seamless redirection.

## ✨ Features
- Unique 6-character short codes
- Instant redirection to original URLs
- Automatic URL validation
- Clean RESTful API
- Serverless-ready (in-memory storage)

## 🚀 Quick Start

### Prerequisites
- Node.js v18+
- npm

### Run
```bash
npm install
npm run start:dev
```

Visit `http://localhost:3000`. Share publicly with `npx ngrok 3000`.

### Test API
**Shorten:**
```bash
curl -X POST http://localhost:3000/url/shorten \\
  -H "Content-Type: application/json" \\
  -d '{"longUrl": "https://www.google.com"}'
```
Response: `{"shortCode": "AbC123"}`

**Redirect:**
```bash
curl -L http://localhost:3000/AbC123
```

## 📚 API Docs

| Endpoint | Method | Body | Response |
|----------|--------|------|----------|
| `/url/shorten` | POST | `{"longUrl": "..."}` | `{"shortCode": "..."}` |
| `/:shortCode` | GET | - | 302 Redirect |


## 🤝 Contributing
1. Fork repository
2. `npm install`
3. Create feature branch
4. PR to main

## 📄 License
This project is MIT licensed.
