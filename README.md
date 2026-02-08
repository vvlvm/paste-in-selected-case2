# Paste in Selected Case

「Paste in Selected Case」は、クリップボードのテキストを選択したケース（Camel Case、Snake Case、Upper Case など）に変換して貼り付ける Visual Studio Code 拡張機能です。複数カーソルや複数行のテキストにも対応しています。

## Features

- クリップボードのテキストを指定したケースに変換して貼り付け
  - コマンドパレット(`Ctrl+Shift+P`)から`Paste in Selected Case`を実行
- 複数カーソルに対応し、それぞれのカーソル位置に異なるテキストを貼り付け
- 改行を含むテキストを分割して貼り付けるオプション
- サポートされるその他のコマンド:
  - `Paste in Camel Case`
  - `Paste in Capital Case`
  - `Paste in Constant Case`
  - `Paste in Dot Case`
  - `Paste in Kebab Case`
  - `Paste in No Case`
  - `Paste in Pascal Case`
  - `Paste in PascalSnake Case`
  - `Paste in Path Case`
  - `Paste in Sentence Case`
  - `Paste in Snake Case`
  - `Paste in Train Case`

## Requirements

この拡張機能を使用するには、以下が必要です:

- Visual Studio Code バージョン 1.98.0 以上

## Extension Settings

この拡張機能は以下のコマンドを提供します:

- `paste-in-selected-case.pasteInSelectedCase`: 任意のケースを選択して貼り付け
- `paste-in-selected-case.camelCase`: Camel Caseに変換して貼り付け
- `paste-in-selected-case.capitalCase`: Capital Caseに変換して貼り付け
- `paste-in-selected-case.constantCase`: Constant Caseに変換して貼り付け
- `paste-in-selected-case.dotCase`: Dot Caseに変換して貼り付け
- `paste-in-selected-case.kebabCase`: Kebab Case (Hyphenated)に変換して貼り付け
- `paste-in-selected-case.noCase`: No Case (Lowercase with spaces)に変換して貼り付け
- `paste-in-selected-case.pascalCase`: Pascal Case (Upper Camel Case)に変換して貼り付け
- `paste-in-selected-case.pascalSnakeCase`: Pascal Snake Caseに変換して貼り付け
- `paste-in-selected-case.pathCase`: Path Case (Slash Separated)に変換して貼り付け
- `paste-in-selected-case.sentenceCase`: Sentence Caseに変換して貼り付け
- `paste-in-selected-case.snakeCase`: Snake Caseに変換して貼り付け
- `paste-in-selected-case.trainCase`: Train Caseに変換して貼り付け

## 廃止されたコマンド

- `paste-in-selected-case.titleCase`: `paste-in-selected-case.capitalCase`に変更
- `paste-in-selected-case.paramCase`: `paste-in-selected-case.kebabCase`に変更
- `paste-in-selected-case.upperCase`: `paste-in-selected-case.pascalCase`に変更

## 使用しているライブラリ

この拡張機能では、以下のライブラリを使用しています:

- [`change-case`](https://github.com/blakeembrey/change-case): テキストをさまざまなケース（Camel Case、Snake Case など）に変換するためのライブラリ。

## Known Issues

## Release Notes

### 0.0.4

- 貼り付けたとき選択部分が置き換えられないバグを修正
- コマンドやメニューで使用していたケースの名称が一般的でないため修正(`Param Case`→`Kebak Case`)

### 0.0.3

- 基本的なケース変換と貼り付け機能を実装
