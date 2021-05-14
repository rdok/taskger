up:
	docker-compose up -d
	docker-compose up api

db-refresh:
	docker-compose up --force-recreate --always-recreate-deps --build --renew-anon-volumes

shell:
	docker-compose run --rm api bash

prettier:
	docker-compose run --rm api bash -c 'npm run prettier'
prettier-fix:
	docker-compose run --rm api bash -c 'npm run prettier:fix'
