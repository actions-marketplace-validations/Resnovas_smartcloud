/*
 * Project: @resnovas/smartcloud
 * File: and.ts
 * Path: \src\conditions\util\and.ts
 * Created Date: Saturday, October 8th 2022
 * Author: Jonathan Stevens (Email: jonathan@resnovas.com, Github: https://github.com/TGTGamer)
 * -----
 * Contributing: Please read through our contributing guidelines. Included are directions for opening
 * issues, coding standards, and notes on development. These can be found at https://github.com/resnovas/smartcloud/CONTRIBUTING.md
 *
 * Code of Conduct: This project abides by the Contributor Covenant, version 2.0. Please interact in ways that contribute to an open,
 * welcoming, diverse, inclusive, and healthy community. Our Code of Conduct can be found at https://github.com/resnovas/smartcloud/CODE_OF_CONDUCT.md
 * -----
 * Copyright (c) 2022 Resnovas - All Rights Reserved
 * LICENSE: GNU General Public License v3.0 or later (GPL-3.0+)
 * -----
 * This program has been provided under confidence of the copyright holder and is
 * licensed for copying, distribution and modification under the terms of
 * the GNU General Public License v3.0 or later (GPL-3.0+) published as the License,
 * or (at your option) any later version of this license.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License v3.0 or later for more details.
 *
 * You should have received a copy of the GNU General Public License v3.0 or later
 * along with this program. If not, please write to: jonathan@resnovas.com,
 * or see https://www.gnu.org/licenses/gpl-3.0-standalone.html
 *
 * DELETING THIS NOTICE AUTOMATICALLY VOIDS YOUR LICENSE - PLEASE SEE THE LICENSE FILE FOR DETAILS
 * -----
 * Last Modified: 23-10-2022
 * By: Jonathan Stevens (Email: jonathan@resnovas.com, Github: https://github.com/TGTGamer)
 * Current Version: 1.0.0-beta.0
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */

import type {
	IssueConditionConfig,
	PrConditionConfig,
	ProjectConditionConfig,
	UtilProps,
	UtilThis,
} from '../index.js';
import {evaluator} from '../../evaluator.js';

const type = '$and';

export type ConditionAnd = {
	type: typeof type;
	condition: Array<PrConditionConfig | IssueConditionConfig | ProjectConditionConfig >;
};
/**
Allows conditions to be combined to create more advanced conditions. Requires all conditions to return true otherwise it would fail.
@examples require(".").example
```json
{
	"type": "$and",
	"condition": [
		{
			"requires": 1,
			"condition": []
		},
		{
			"requires": 1,
			"condition": []
		}
	]
}
``` */

async function and(this: UtilThis, condition: ConditionAnd, context: UtilProps) {
	const results = await run.call(this, condition, context);
	const success = results.filter(Boolean).length;
	return success === condition.condition.length;
}

export default [type, and] as const;

async function run(this: UtilThis, condition: ConditionAnd, context: UtilProps) {
	const results: Array<Promise<boolean>> = [];

	for (const conditions of condition.condition) {
		results.push(evaluator.call(this, conditions, context));
	}

	return Promise.all(results);
}

export const example: ConditionAnd = {
	type,
	condition: [
		{
			requires: 1,
			condition: [
				{
					type: 'isDraft',
					condition: true,
				},
			],
		},
		{
			requires: 1,
			condition: [
				{
					type: 'isOpen',
					condition: true,
				},
			],
		},
	],
};
