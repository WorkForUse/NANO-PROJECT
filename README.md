<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="100" alt="Nest Logo" /></a>
  <img src="https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png" width="100" alt="Docker Logo" style="margin-left: 20px;"/>
  <img src="https://wiki.postgresql.org/images/a/a4/PostgreSQL_logo.3colors.svg" width="90" alt="Postgres Logo" style="margin-left: 20px;"/>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrPmNWAtnroI424NFmJBwNtUs6YIL_eVXHjA&s" width="90" alt="Postgres Logo" style="margin-left: 20px;"/>

</p>

# 🚀 Nano-URL Shortener Microservice

A professional, high-performance URL shortening API built with **NestJS**, **TypeORM**, and **PostgreSQL**, fully containerized using **Docker Compose**.

[![NestJS](https://img.shields.io/badge/NestJS-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)](https://nestjs.com/)
[![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)

## ✨ Key Features
- **Deterministic Short Codes**: Generates unique 6-character IDs using `nanoid`.
- **Database Persistence**: Reliable data storage with PostgreSQL.
- **Instant Redirection**: High-speed GET endpoint for seamless user redirection.
- **Validation**: Strict URL validation using `class-validator` (Global Pipes).
- **Zero-Config Deployment**: Fully Dockerized environment for one-command setup.

---

## 🏗 System Architecture
The application is architected using a multi-container Docker setup:
1. **App Container**: Runs the NestJS application (Node.js Alpine).
2. **DB Container**: Runs the PostgreSQL 15 database.
3. **Internal Networking**: Both containers communicate over a private bridge network, keeping the database isolated from direct public access.

---

## 🐳 Getting Started (Dockerized Environment)

The easiest way to run this project is using Docker. You don't need to install Node.js or PostgreSQL locally.

### 1. Prerequisites
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running.

### 2. Run the Application
In the project root directory, run:
```bash
docker compose up --build


--------------------------------------------------------------------------
The API will be live at http://localhost:3000.

🧪 API Testing with Postman
To verify the API performance and logic, follow these steps in Postman:

1. Shorten a URL (POST)
Method: POST

URL: http://localhost:3000/shorten

Headers: Content-Type: application/json

Body (raw JSON):

JSON
{
  "longUrl": "[https://www.google.com](https://www.google.com)"
}
Response: You will receive a 201 Created status with the generated code.


2. Redirect to Original (GET)
Method: GET

URL: http://localhost:3000/{code} (e.g., http://localhost:3000/8YRrkO)

Action: Paste this URL directly into your browser to test the redirection logic.

🛠 Technical Stack
Framework: NestJS (TypeScript)

ORM: TypeORM

Database: PostgreSQL 15

Unique IDs: Nanoid

Infrastructure: Docker & Docker Compose

👨‍💻 Author
Muhammad Hamza Shahid Full-Stack & Mobile Application Developer
