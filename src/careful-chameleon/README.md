# arduino-cli-docker

## Description

CLIによるM5Stackの開発にあたり、スケッチのコンパイルとアップロードを行う環境

## Installation

```
$ docker-compose build
```

```
$ ./install_libs.sh
```

## Usage

### スケッチのビルド

```
$ docker-compose run arduino-cli compile -v -b esp32:esp32:m5stack-core-esp32 {プロジェクトのディレクトリ}
```

- コンテナにホストのカレントディレクトリを引き渡しているので、このリポジトリのルートにいる場合はprojects/{プロジェクトのディレクトリ}という形になる

### スケッチのアップロード

```
$ docker-compose run arduino-cli upload -p /dev/ttyUSB0 -b esp32:esp32:m5stack-core-esp32 {プロジェクトのディレクトリ}
```

- コンテナにホストのカレントディレクトリを引き渡しているので、このリポジトリのルートにいる場合はprojects/{プロジェクトのディレクトリ}という形になる

### スケッチの新規作成

```
$ docker-compose run arduino-cli sketch new {プロジェクト名}
```

- permissionがrootになるので素直にホストでmkdirとtouchした方が良さそう

### ライブラリのインストール

#### arduino-cli経由

```
$ docker-compose run arduino-cli lib install {ライブラリ名}
```

#### 手動(HX711の例)

```
$ git clone https://github.com/bogde/HX711.git
$ mkdir assets/Arduino/libraries/HX711/
$ mv HX711/src/* assets/Arduino/libraries/HX711
$ rm -rf HX711/
```

## Note

### assets/について

- `assets/`ディレクトリにライブラリが保存される
- このディレクトリはpermissionがrootになるので注意
- C++のLanguage Serverのinclude pathにここの中から適切なpathを渡して解析させる予定

### (WIP) Language Serverについて

- cocの拡張が用意されていて、開発も盛んな`clangd`(coc-clangd)を利用したかったが、インクルードパスの追加がうまく行かなかった
- ひとまず、単体でインストールされた`ccls`をLSとして利用し、`.ccls`を用意することで補完が使えそうな感じだった
- システムに`ccls`がインストールされている環境であれば、projects/{プロジェクト名}/{プロジェクト名}**.cpp**で補完が一部効く
  - 取り敢えず、M5Stack.hの補完とHX711.hの#includeの補完は確認した
  - arduino-cliのコンパイル時の出力を参考にするか、ライブラリを漁って`.ccls`に追記すれば使えそうな感じ
