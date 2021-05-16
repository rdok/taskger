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

test:
	docker-compose run --rm api bash -c 'npm run test'
test-watch:
	docker-compose run --rm api bash -c 'npm run test:watch'

.PHONY: node_modules
node_modules:
	npm ci --frozen-lockfile

logs-test:
	heroku logs --app=rdok-test-taskger --tail
