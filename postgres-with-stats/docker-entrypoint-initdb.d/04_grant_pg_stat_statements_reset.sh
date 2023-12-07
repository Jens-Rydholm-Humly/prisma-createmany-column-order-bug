#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
  GRANT EXECUTE ON FUNCTION pg_stat_statements_reset TO $POSTGRES_USER;
EOSQL
