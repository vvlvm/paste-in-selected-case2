import * as vscode from 'vscode'
import {
	CASE_LABELS,
	CASE_NAMES,
	CaseQuickPickItem,
	isCaseName,
} from './CaseName'

export async function getUserSelectedCase() {
	const changeCase = await import('change-case')

	// ユーザーにケースを選択させるメニューを表示
	/**
	 * https://www.npmjs.com/package/change-case
	 * camelCase				twoWords
	 * capitalCase			Two Words
	 * constantCase			TWO_WORDS
	 * dotCase					two.words
	 * kebabCase				two-words
	 * noCase						two words
	 * pascalCase				TwoWords
	 * pascalSnakeCase	Two_Words
	 * pathCase					two/words
	 * sentenceCase			Two words
	 * snakeCase				two_words
	 * trainCase				Two-Words
	 **/
	const menu: CaseQuickPickItem[] = await Promise.all(
		CASE_NAMES.map(async (caseName) => ({
			label: CASE_LABELS[caseName],
			description: changeCase[caseName]('sample text'),
			caseName,
		})),
	)

	const selectedCase = await vscode.window.showQuickPick(menu, {
		placeHolder: '変換するケースを選んでください',
	})

	if (!selectedCase) {
		return
	}

	if (!isCaseName(selectedCase.caseName)) {
		return
	}

	return selectedCase.caseName
}
