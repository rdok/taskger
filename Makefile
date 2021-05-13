db:
	docker-compose run api
up:
	docker-compose up -d

prettier:
	docker-compose run --rm api bash -c 'npm run prettier'
prettier-fix:
	docker-compose run --rm api bash -c 'npm run prettier:fix'
