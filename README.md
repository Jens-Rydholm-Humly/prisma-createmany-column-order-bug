# Prisma createMany column order bug reproduced

[Prisma discussion issue](https://github.com/prisma/prisma/discussions/22301)

To start a PostgreSQL instance with the appropriate configuration (enabling `pg_stat_statements`):
```bash
docker-compose up --build
```

To build the code reproducing the bug:
```bash
pnpm install
pnpm run start
```
