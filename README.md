# Paste in Selected Case

「Paste in Selected Case」は、クリップボードのテキストを選択したケース（Camel Case、Snake Case、Upper Case など）に変換して貼り付ける Visual Studio Code 拡張機能です。複数カーソルや複数行のテキストにも対応しています。

## Features

- クリップボードのテキストを指定したケースに変換して貼り付け
- 複数カーソルに対応し、それぞれのカーソル位置に異なるテキストを貼り付け
- 改行を含むテキストを分割して貼り付けるオプション
- サポートされるケース:
  - Camel Case
  - Title Case
  - Constant Case
  - Dot Case
  - Param Case
  - Upper Case
  - Path Case
  - Sentence Case
  - Snake Case

## Requirements

この拡張機能を使用するには、以下が必要です:

- Visual Studio Code バージョン 1.98.0 以上

## Extension Settings

この拡張機能は以下のコマンドを提供します:

- `paste-in-selected-case.pasteInSelectedCase`: 任意のケースを選択して貼り付け
- `paste-in-selected-case.camelCase`: Camel Case に変換して貼り付け
- `paste-in-selected-case.titleCase`: Title Case に変換して貼り付け
- `paste-in-selected-case.constantCase`: Constant Case に変換して貼り付け
- `paste-in-selected-case.dotCase`: Dot Case に変換して貼り付け
- `paste-in-selected-case.paramCase`: Param Case に変換して貼り付け
- `paste-in-selected-case.upperCase`: Upper Case に変換して貼り付け
- `paste-in-selected-case.pathCase`: Path Case に変換して貼り付け
- `paste-in-selected-case.sentenceCase`: Sentence Case に変換して貼り付け
- `paste-in-selected-case.snakeCase`: Snake Case に変換して貼り付け

## 使用しているライブラリ

この拡張機能では、以下のライブラリを使用しています:

- [`change-case`](https://github.com/blakeembrey/change-case): テキストをさまざまなケース（Camel Case、Snake Case など）に変換するためのライブラリ。

## Known Issues

## Release Notes

### 0.0.3

- 基本的なケース変換と貼り付け機能を実装
