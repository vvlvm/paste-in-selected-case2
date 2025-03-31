import * as vscode from 'vscode'
import { CaseName } from './CaseName'
import { toCase } from './toCase'

export async function pasteInCase(caseName: CaseName) {
	const clipboardText = await vscode.env.clipboard.readText()

	if (clipboardText === null || clipboardText === undefined) {
		vscode.window.showErrorMessage('クリップボードが空です')
		return
	}

	const transformedText: string = await toCase(caseName, clipboardText)
	const multiCursorTransformedTexts: string[] = await Promise.all(
		splitClipboardTextForMultiCursor(clipboardText).map((text) => toCase(caseName, text))
	)

	const containsNewLine = /[\n\r]/.test(clipboardText)

	if (!containsNewLine) {
		pasteText(transformedText)
		return
	}

	const editor = vscode.window.activeTextEditor
	const isSingleSelection = editor && editor.selections.length === 1
	if (isSingleSelection) {
		pasteText(transformedText)
		return
	}

	// 分割するかしないかの選択肢を表示
	const splitOptionMenuItems: SplitOptionMenuItem[] = [
		{
			label: '改行で分割する',
			description: multiCursorTransformedTexts.length + ' items',
			detail: multiCursorTransformedTexts.join(', '),
		},
		{ label: '改行で分割しない', detail: transformedText },
	]
	const selectedMenuItem = await vscode.window.showQuickPick(splitOptionMenuItems, {
		title: 'クリップボードのテキストが複数行またはマルチカーソルです。改行で分割しますか？',
	})

	const canceled = selectedMenuItem === undefined
	if (canceled) {
		return
	}

	if (selectedMenuItem.label === '改行で分割する') {
		pasteAsMultiCursor(multiCursorTransformedTexts)
		return
	} else if (selectedMenuItem.label === '改行で分割しない') {
		pasteText(transformedText)
		return
	} else {
		// このelse文は実際不要ですが、将来的な拡張や予期しないエラーへの対応を考慮して残しておくことをお勧めします。
		vscode.window.showErrorMessage('選択肢の取得に失敗しました')
		return
	}
}

/**
 * labelの型制約により、不正なlabelを判定するとエラーになる
 */
interface SplitOptionMenuItem extends vscode.QuickPickItem {
	label: '改行で分割する' | '改行で分割しない'
}

async function pasteText(sourceText: string) {
	const editor = vscode.window.activeTextEditor
	if (editor) {
		editor.edit((editBuilder) => {
			const selections = editor.selections
			selections.forEach((selection) => {
				const position = selection.active
				editBuilder.insert(position, sourceText)
			})
		})
	} else {
		vscode.window.showErrorMessage('エディターがアクティブではありません')
	}
}

async function pasteAsMultiCursor(sourceTexts: string[]) {
	const editor = vscode.window.activeTextEditor

	if (editor) {
		editor.edit((editBuilder) => {
			const selections = editor.selections
			selections.forEach((selection, index) => {
				const position = selection.active
				const text = sourceTexts[index % sourceTexts.length] // 配列の長さを超えた場合にループする
				editBuilder.insert(position, text)
			})

			// 残りのtransformedTextを最後のカーソル位置に貼り付ける
			if (selections.length < sourceTexts.length) {
				const lastSelection = selections[selections.length - 1]
				const lastPosition = lastSelection.active
				const remainingText = sourceTexts.slice(selections.length).join('')
				editBuilder.insert(lastPosition, remainingText)
			}
		})
	} else {
		vscode.window.showErrorMessage('エディターがアクティブではありません')
	}
}

/**
 * クリップボードのテキストを改行で分割し、配列として返す
 * マルチカーソル用
 */
function splitClipboardTextForMultiCursor(clipboardText: string): string[] {
	return clipboardText.split(/[\n\r]+/g)
}
