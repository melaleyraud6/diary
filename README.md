# README

## アプリ名
  観察日記
## 概要
  植物の育ち具合を写真と１行コメントで記録していく
## 本番環境 ( デプロイ先 )
   http://18.176.144.72/

   デプロイは出来たのですが、新規登録の際にメール確認機能をつけていたところそれが本番環境で上手くいかずログインできない状態です。
   下に添付しておりますキャプチャは開発環境でのものになります。

## 制作背景
   コロナで自粛するようになって野菜を育て始めたのがきっかけです。
## DEMO
新規登録
[![Image from Gyazo](https://i.gyazo.com/85e417c606726421afd591f54842bb77.png)](https://gyazo.com/85e417c606726421afd591f54842bb77)
ログイン
[![Image from Gyazo](https://i.gyazo.com/acdb19dff2649cea4e1c86b53f23ae78.png)](https://gyazo.com/acdb19dff2649cea4e1c86b53f23ae78)
トップページ
[![Image from Gyazo](https://i.gyazo.com/05a5aa0c14a9d9a8abc7707619846623.jpg)](https://gyazo.com/05a5aa0c14a9d9a8abc7707619846623)
ログイン後トップページ
[![Image from Gyazo](https://i.gyazo.com/1d766ffdf5d46f821d1b653840e6b0d3.jpg)](https://gyazo.com/1d766ffdf5d46f821d1b653840e6b0d3)
  *  使用技術  
     ruby  
     ruby on rails  
     jquery

## DB設計

## postテーブル
|Column|Type|Opitons|
|------|----|-------|
|title|string|null: false|
|content|text|null: false|
|image|text|null: false|
|user_id|refrences|foreign_key: true|

### Association
belongs_to: user


## userテーブル
|Column|Type|Opitons|
|------|----|-------|
|name|string|null: false, unique:true|
|email|string|null: false, unique:true|
|password|string|null: false, unique:true|

### Association
has_many: posts