all:

build-dev:
	make -C node-web-api build-dev

start-dev:
	docker-compose up -d

stop-dev:
	docker-compose down
