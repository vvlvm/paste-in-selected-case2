import { CaseName } from './CaseName'
const changeCase = require('change-case')

export async function toCase(caseName: CaseName, str: string): Promise<string> {
	switch (caseName) {
		case 'Camel Case':
			return changeCase.camelCase(str)

		case 'Title Case':
			return changeCase.capitalCase(str)

		case 'Constant Case':
			return changeCase.constantCase(str)

		case 'Dot Case':
			return changeCase.dotCase(str)

		case 'Param Case':
			return changeCase.kebabCase(str)

		case 'Upper Case':
			return changeCase.pascalCase(str)

		case 'Path Case':
			return changeCase.pathCase(str)

		case 'Sentence Case':
			return changeCase.sentenceCase(str)

		case 'Snake Case':
			return changeCase.snakeCase(str)

		default:
			throw new Error('無効なケースが選択されました')
	}
}
