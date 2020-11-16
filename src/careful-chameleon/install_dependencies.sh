#!/bin/sh

docker-compose run -u $(id -u $USER):$(id -g $USER) platformio project init --ide vim --board m5stack-core-esp32
docker-compose run -u $(id -u $USER):$(id -g $USER) platformio platform install espressif32

sed -i -e 's/\/tmp\/platformio\//.\//' -e "s/\/home\/$USER\/.platformio\//.\//" .ccls

# Private library

## HX711
mkdir ./lib/HX711/
wget -P ./lib/HX711/ https://raw.githubusercontent.com/bogde/HX711/master/src/HX711.cpp
wget -P ./lib/HX711/ https://raw.githubusercontent.com/bogde/HX711/master/src/HX711.h
echo "-I./lib/HX711" >> .ccls
