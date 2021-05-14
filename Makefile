api: docker-compose.up
	docker-compose run --rm api bash -c 'npm run start:dev'

db-refresh:
	docker-compose up --force-recreate --always-recreate-deps --build --renew-anon-volumes

docker-compose.up:
	docker-compose up -d
	touch docker-compose.up

prettier:
	docker-compose run --rm api bash -c 'npm run prettier'
prettier-fix:
	docker-compose run --rm api bash -c 'npm run prettier:fix'
