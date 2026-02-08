import * as vscode from 'vscode'

export const CASE_NAMES = [
	'camelCase',
	'capitalCase',
	'constantCase',
	'dotCase',
	'kebabCase',
	'noCase',
	'pascalCase',
	'pascalSnakeCase',
	'pathCase',
	'sentenceCase',
	'snakeCase',
	'trainCase',
] as const

export type ChangeCaseCaseName = (typeof CASE_NAMES)[number]

export const CASE_LABELS: { [key in ChangeCaseCaseName]: string } = {
	camelCase: 'Camel Case',
	capitalCase: 'Capital Case',
	constantCase: 'Constant Case',
	dotCase: 'Dot Case',
	kebabCase: 'Kebab Case (Hyphenated)',
	noCase: 'No Case (Lowercase with spaces)',
	pascalCase: 'Pascal Case (Upper Camel Case)',
	pascalSnakeCase: 'Pascal Snake Case',
	pathCase: 'Path Case (Slash Separated)',
	sentenceCase: 'Sentence Case',
	snakeCase: 'Snake Case',
	trainCase: 'Train Case',
}

export function isCaseName(value: unknown): value is ChangeCaseCaseName {
	return CASE_NAMES.includes(value as ChangeCaseCaseName)
}

export interface CaseQuickPickItem extends vscode.QuickPickItem {
	caseName: ChangeCaseCaseName
}
