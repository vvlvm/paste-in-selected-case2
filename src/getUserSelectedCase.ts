import * as vscode from 'vscode'
import { CASE_NAMES, isCaseName } from './CaseName'
import { toCase } from './toCase'

export async function getUserSelectedCase() {
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
	const menu: vscode.QuickPickItem[] = await Promise.all(
		CASE_NAMES.map(async (caseName) => ({
			label: caseName,
			description: await toCase(caseName, 'sample text'),
		}))
	)

	const selectedCase = await vscode.window.showQuickPick(menu, {
		placeHolder: '変換するケースを選んでください',
	})

	if (!selectedCase) {
		return
	}
	if (!isCaseName(selectedCase.label)) {
		return
	}

	return selectedCase.label
}
