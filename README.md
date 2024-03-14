# NBS Stack (Next.js, BigCommerce, Strapi)
This is a full stack e-commerce application built with Next.js, BigCommerce, and Strapi.

## Prerequisites

- Ensure [Docker](https://www.docker.com/) is installed on your system and is running.

## Getting Started

Copy the env example file and rename it to `.env`:

```bash
cp .env.example .env
```

Fill out the `.env` file with the necessary environment variables.

Run the development environment with the following command:

```bash
docker compose -f ./docker-compose.dev.yml up
```

Navigate to the Strapi admin panel at [http://localhost:1337/admin](http://localhost:1337/admin) and create an admin user.

The frontend is hosted on [http://localhost:3000](http://localhost:3000).

## Building for Production

Run the production environment with the following command:

```bash
docker compose -f ./docker-compose.prod.yml up
```