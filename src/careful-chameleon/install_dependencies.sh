#!/bin/sh

docker-compose run -u $(id -u $USER):$(id -g $USER) platformio project init --ide vim --board m5stack-core-esp32

sed -i -e 's/\/tmp\/platformio\//.\//' -e "s/\/home\/$USER\/.platformio\//.\//" .ccls
