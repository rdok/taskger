run: up
    docker-compose up -d

db-refresh:
	docker-compose up --force-recreate --always-recreate-deps --build --renew-anon-volumes

api:
	docker-compose run --rm api bash -c 'npm run start:dev'
up:
	docker-compose up -d

prettier:
	docker-compose run --rm api bash -c 'npm run prettier'
prettier-fix:
	docker-compose run --rm api bash -c 'npm run prettier:fix'
