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
		},
	)

	const camelCaseDisposable = vscode.commands.registerCommand(
		'paste-in-selected-case.camelCase',
		async () => {
			pasteInCase('camelCase')
		},
	)
	const capitalCaseDisposable = vscode.commands.registerCommand(
		'paste-in-selected-case.capitalCase',
		async () => {
			pasteInCase('capitalCase')
		},
	)
	const constantCaseDisposable = vscode.commands.registerCommand(
		'paste-in-selected-case.constantCase',
		async () => {
			pasteInCase('constantCase')
		},
	)
	const dotCaseDisposable = vscode.commands.registerCommand(
		'paste-in-selected-case.dotCase',
		async () => {
			pasteInCase('dotCase')
		},
	)
	const kebabCaseDisposable = vscode.commands.registerCommand(
		'paste-in-selected-case.kebabCase',
		async () => {
			pasteInCase('kebabCase')
		},
	)
	const noCaseDisposable = vscode.commands.registerCommand(
		'paste-in-selected-case.noCase',
		async () => {
			pasteInCase('noCase')
		},
	)
	const pascalCaseDisposable = vscode.commands.registerCommand(
		'paste-in-selected-case.pascalCase',
		async () => {
			pasteInCase('pascalCase')
		},
	)
	const pascalSnakeCaseDisposable = vscode.commands.registerCommand(
		'paste-in-selected-case.pascalSnakeCase',
		async () => {
			pasteInCase('pascalSnakeCase')
		},
	)
	const pathCaseDisposable = vscode.commands.registerCommand(
		'paste-in-selected-case.pathCase',
		async () => {
			pasteInCase('pathCase')
		},
	)
	const sentenceCaseDisposable = vscode.commands.registerCommand(
		'paste-in-selected-case.sentenceCase',
		async () => {
			pasteInCase('sentenceCase')
		},
	)
	const snakeCaseDisposable = vscode.commands.registerCommand(
		'paste-in-selected-case.snakeCase',
		async () => {
			pasteInCase('snakeCase')
		},
	)
	const trainCaseDisposable = vscode.commands.registerCommand(
		'paste-in-selected-case.trainCase',
		async () => {
			pasteInCase('trainCase')
		},
	)

	context.subscriptions.push(selectableDisposable)
	context.subscriptions.push(camelCaseDisposable)
	context.subscriptions.push(capitalCaseDisposable)
	context.subscriptions.push(constantCaseDisposable)
	context.subscriptions.push(dotCaseDisposable)
	context.subscriptions.push(kebabCaseDisposable)
	context.subscriptions.push(noCaseDisposable)
	context.subscriptions.push(pascalCaseDisposable)
	context.subscriptions.push(pascalSnakeCaseDisposable)
	context.subscriptions.push(pathCaseDisposable)
	context.subscriptions.push(sentenceCaseDisposable)
	context.subscriptions.push(snakeCaseDisposable)
	context.subscriptions.push(trainCaseDisposable)
}

export function deactivate() {}
