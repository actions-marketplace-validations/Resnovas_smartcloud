/*
 * Project: @resnovas/smartcloud
 * File: labels.ts
 * Path: \src\utils\api\labels.ts
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

/* eslint-disable @typescript-eslint/naming-convention */

import type {Utils} from '../index.js';
import type {Label, Labels} from '../../types.js';

export async function add(this: Utils, IDNumber: number, label: string) {
	await this.client.rest.issues.addLabels({
		...this.repo,
		issue_number: IDNumber,
		labels: [label],
	});
}

export async function create(this: Utils, label: Label, ref?: string) {
	const color = await this.parsingData.formatColor(label.color);
	await this.client.rest.issues.createLabel({
		...this.repo,
		ref: ref ?? this.ref ?? 'master',
		...label,
		color,
	});
}

export async function del(this: Utils, name: string, ref?: string) {
	await this.client.rest.issues.deleteLabel({
		...this.repo,
		ref: ref ?? this.ref ?? 'master',
		name,
	});
}

export async function get(this: Utils, ref?: string): Promise<Labels> {
	const labels = await this.client.paginate(
		this.client.rest.issues.listLabelsForRepo.endpoint({
			...this.repo,
			ref: ref ?? this.ref ?? 'master',
		}),
	) as Label[];

	const labelsMap = labels.map((label: Label) => ({
		name: label.name,
		description: label.description,
		color: label.color,
	}));

	// eslint-disable-next-line unicorn/no-array-reduce
	return labelsMap.reduce((acc: Record<string, Label>, cur) => {
		acc[cur.name.toLowerCase()] = cur;
		return acc;
	}, {});
}

export async function remove(
	this: Utils,
	IDNumber: number,
	label: string,
	ref?: string,
) {
	await this.client.rest.issues.removeLabel({
		...this.repo,
		ref: ref ?? this.ref ?? 'master',
		issue_number: IDNumber,
		name: label,
	});
}

export async function update(
	this: Utils,
	current_name: string,
	label: Label,
	ref?: string,
) {
	const color = await this.parsingData.formatColor(label.color);
	await this.client.rest.issues.updateLabel({
		...this.repo,
		ref: ref ?? this.ref ?? 'master',
		current_name,
		name: label.name,
		description: label.description,
		color,
	});
}
