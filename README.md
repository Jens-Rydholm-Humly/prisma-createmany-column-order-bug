# Prisma createMany column order bug reproduced

[Prisma issue](https://github.com/prisma/prisma/issues/22307)

To start a PostgreSQL instance with the appropriate configuration (enabling `pg_stat_statements`):
```bash
docker-compose up --build
```

To build the code reproducing the bug:
```bash
pnpm install
pnpm run start
```

This will print the executed SQL queries and the number of calls for each, showing that the createMany queries get random column orders.
