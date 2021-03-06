#!/c/Windows/system32/bash

export PGPASSWORD='123456'

database="monstersdb"

echo "Configuring database: $database"

dropdb -U node_user monstersdb;
createdb -U node_user monstersdb;

psql -U node_user monstersdb < ./bin/sql/monster.sql

echo "$database configured"