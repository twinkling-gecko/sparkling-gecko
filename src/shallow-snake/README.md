# shallow-snake

```
.
├── docker-compose.yml
└── src
   ├── aodaishou       # nuxtプロジェクト
   └── nishiki         # mysqlの設定ファイル
```

# 環境構築

## required

- docker
- docker-compose
- yarn

## 開発用コンテナ立ち上げ

### aodaishou の依存性

`/src/aodaishou/node_modules` に保存される

`$ docker-compose run aodaishou yarn`

### まとめて立ち上げ

`$ docker-compose up` (-d でバックグラウンド起動)
`$ docker-compose logs -f {サービス名}`で任意のサービスのログを見ることができる

