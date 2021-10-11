/** @format */

import { UtilProps, UtilThis } from "../"

const TYPE = "creatorMatches"

export interface ConditionCreatorMatches {
	type: typeof TYPE
	pattern: string
}

async function creatorMatches(
	this: UtilThis,
	condition: ConditionCreatorMatches,
	issue: UtilProps
) {
	const pattern = await this.util.parsingData.processRegExpPattern(
		condition.pattern
	)
	return pattern.test(issue.creator)
}

export default [TYPE, creatorMatches] as const
