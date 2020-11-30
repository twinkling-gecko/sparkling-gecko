# pio-docker

## Description

PlatformIO Core (CLI)によるM5Stackの開発にあたり、スケッチのコンパイルとアップロードを行う環境

## Installation

### fish

```
$ docker-compose build --build-arg USER_NAME=(id -un) --build-arg USER_ID=(id -u)
```

```
$ ./install_dependencies.sh
```

### bash

```
$ docker-compose build --build-arg USER_NAME=$(id -un) --build-arg USER_ID=$(id -u)
```

```
$ ./install_dependencies.sh
```

## Usage

### スケッチのコンパイル

#### fish

```
$ docker-compose run --rm -u (id -u $USER):(id -g $USER) platformio run
```

#### bash

```
$ docker-compose run --rm -u $(id -u $USER):$(id -g $USER) platformio run
```

### スケッチのアップロード

#### fish

```
$ docker-compose run --rm -u (id -u $USER):(id -g $USER) platformio run --target upload
```

#### bash

```
$ docker-compose run --rm -u $(id -u $USER):$(id -g $USER) platformio run --target upload
```

#### LinuxでPermissionで怒られる場合
```
# chmod o+wr /dev/ttyUSB0
```

### ライブラリの手動追加

1. /lib/{ライブラリのディレクトリ}/ライブラリ.cppとライブラリ.hの形式でファイルを準備する
2. `.ccls`にインクルードパスを追加する (-I./lib/{ライブラリのディレクトリ})

