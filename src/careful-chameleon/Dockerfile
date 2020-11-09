# alpineベースにしたかったけど、xtensa-esp32-elf-g++が実行不可能な現象があるのでUbuntuベースにした
FROM ubuntu:20.04

MAINTAINER kobar9568

# 依存関係のインストール
RUN apt update &&\
    apt install -y --no-install-recommends wget ca-certificates python &&\
    apt -y clean &&\
    rm -rf /var/lib/apt/lists/*

# pyserialのインストール(arduino-cliが依存)
RUN wget https://bootstrap.pypa.io/get-pip.py &&\
    python get-pip.py &&\
    pip install pyserial

# arduino-cliのインストール
RUN wget https://downloads.arduino.cc/arduino-cli/arduino-cli_latest_Linux_64bit.tar.gz &&\
    tar xf arduino-cli_latest_Linux_64bit.tar.gz &&\
    rm -rf arduino-cli_latest_Linux_64bit.tar.gz &&\
    mv arduino-cli /usr/local/bin/
