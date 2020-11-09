#!/bin/sh

docker-compose run arduino-cli core install arduino:avr
docker-compose run arduino-cli core install esp32:esp32 --additional-urls https://dl.espressif.com/dl/package_esp32_index.json
docker-compose run arduino-cli lib install M5Stack
