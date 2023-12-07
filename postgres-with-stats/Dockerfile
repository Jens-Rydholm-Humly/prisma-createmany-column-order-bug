FROM postgres:13.5 AS base

FROM base AS initdb
COPY ./docker-entrypoint-initdb.d /docker-entrypoint-initdb.d
