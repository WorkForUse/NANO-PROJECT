<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
  <img src="https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png" width="120" alt="Docker Logo" style="margin-left: 20px;"/>
</p>

# Nano-URL Shortener Microservice

A high-performance URL shortening service built with **NestJS**, **TypeORM**, and **PostgreSQL**, fully containerized using **Docker**.

## 🚀 Overview
This microservice allows users to shorten long URLs into 6-character unique codes and provides seamless redirection. It follows a clean architecture, ensuring scalability and ease of deployment.



## 🛠 Features
- **URL Shortening**: Generates a unique 6-character ID for any valid URL.
- **Redirection**: Automatically redirects users from the short code to the original long URL.
- **Persistence**: Uses PostgreSQL to store URL mappings reliably.
- **Dockerized**: Entire environment (App + DB) spins up with a single command.
- **Validation**: Global validation pipes to ensure only valid URLs are processed.

## 🐳 Getting Started (Docker)

The easiest way to run this project is using Docker. You don't need to install Node.js or PostgreSQL locally.

### 1. Prerequisites
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running.

### 2. Run the Application
In the project root directory, run:
```bash
docker compose up --build
