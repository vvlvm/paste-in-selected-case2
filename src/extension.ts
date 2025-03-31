import * as vscode from 'vscode'
import { getUserSelectedCase } from './getUserSelectedCase'
import { pasteInCase } from './pasteInCase'

export function activate(context: vscode.ExtensionContext) {
	const selectableDisposable = vscode.commands.registerCommand(
		'paste-in-selected-case.pasteInSelectedCase',
		async () => {
			const userSelectedCase = await getUserSelectedCase()

			if (!userSelectedCase) {
				return
			}

			// クリップボードの文字列を取得
			pasteInCase(userSelectedCase)
		}
	)

	const camelCaseDisposable = vscode.commands.registerCommand('paste-in-selected-case.camelCase', async () => {
		pasteInCase('Camel Case')
	})
	const titleCaseDisposable = vscode.commands.registerCommand('paste-in-selected-case.titleCase', async () => {
		pasteInCase('Title Case')
	})
	const constantCaseDisposable = vscode.commands.registerCommand('paste-in-selected-case.constantCase', async () => {
		pasteInCase('Constant Case')
	})
	const dotCaseDisposable = vscode.commands.registerCommand('paste-in-selected-case.dotCase', async () => {
		pasteInCase('Dot Case')
	})
	const paramCaseDisposable = vscode.commands.registerCommand('paste-in-selected-case.paramCase', async () => {
		pasteInCase('Param Case')
	})
	const upperCaseDisposable = vscode.commands.registerCommand('paste-in-selected-case.upperCase', async () => {
		pasteInCase('Upper Case')
	})
	const pathCaseDisposable = vscode.commands.registerCommand('paste-in-selected-case.pathCase', async () => {
		pasteInCase('Path Case')
	})
	const sentenceCaseDisposable = vscode.commands.registerCommand('paste-in-selected-case.sentenceCase', async () => {
		pasteInCase('Sentence Case')
	})
	const snakeCaseDisposable = vscode.commands.registerCommand('paste-in-selected-case.snakeCase', async () => {
		pasteInCase('Snake Case')
	})

	context.subscriptions.push(selectableDisposable)
	context.subscriptions.push(camelCaseDisposable)
	context.subscriptions.push(titleCaseDisposable)
	context.subscriptions.push(constantCaseDisposable)
	context.subscriptions.push(dotCaseDisposable)
	context.subscriptions.push(paramCaseDisposable)
	context.subscriptions.push(upperCaseDisposable)
	context.subscriptions.push(pathCaseDisposable)
	context.subscriptions.push(sentenceCaseDisposable)
	context.subscriptions.push(snakeCaseDisposable)
}

export function deactivate() {}
