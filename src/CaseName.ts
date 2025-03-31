export const CASE_NAMES = [
	'Camel Case',
	'Upper Case',
	'Constant Case',
	'Dot Case',
	'Param Case',
	'Path Case',
	'Snake Case',
	'Title Case',
	'Sentence Case',
] as const

export type CaseName =
	| 'Camel Case'
	| 'Title Case'
	| 'Constant Case'
	| 'Dot Case'
	| 'Param Case'
	| 'Upper Case'
	| 'Path Case'
	| 'Sentence Case'
	| 'Snake Case'

export function isCaseName(value: unknown): value is CaseName {
	return CASE_NAMES.includes(value as CaseName)
}
