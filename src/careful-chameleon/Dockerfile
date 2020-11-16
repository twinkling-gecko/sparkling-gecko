FROM ubuntu:20.04

LABEL maintainer "kobar9568 <38117745+kobar9568@users.noreply.github.com>"

# 依存関係のインストール
RUN apt-get update &&\
    apt-get install -y --no-install-recommends curl ca-certificates python3 python3-distutils &&\
    apt-get -y clean &&\
    rm -rf /var/lib/apt/lists/*

# ホストのコンテナ実行ユーザを使用する
ARG USER_NAME
ARG USER_ID
RUN useradd -u ${USER_ID} -m ${USER_NAME}
USER ${USER_NAME}

# PlatformIOのインストール
RUN python3 -c "$(curl -fsSL https://raw.githubusercontent.com/platformio/platformio/develop/scripts/get-platformio.py)"
