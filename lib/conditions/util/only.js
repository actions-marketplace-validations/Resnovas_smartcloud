"use strict";
/*
 * Project: @resnovas/smartcloud
 * File: only.ts
 * Path: \src\conditions\util\only.ts
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.example = void 0;
const evaluator_js_1 = require("../../evaluator.js");
const type = '$only';
/** Requires only the number specified in `requires` to pass otherwise it fails.
@examples require(".").example
```json
{
    "type": "$only",
    "requires": 1,
    "condition": [
        {
            "requires": 1,
            "conditions": []
        },
        {
            "requires": 1,
            "conditions": []
        }
    ]
}
``` */
async function only(condition, context) {
    const results = await run.call(this, condition, context);
    const success = results.filter(Boolean).length;
    return success === condition.requires;
}
exports.default = [type, only];
async function run(condition, context) {
    const results = [];
    for (const conditions of condition.condition) {
        results.push(evaluator_js_1.evaluator.call(this, conditions, context));
    }
    return Promise.all(results);
}
exports.example = {
    type,
    requires: 1,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25seS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb25kaXRpb25zL3V0aWwvb25seS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBc0NHOzs7QUFTSCxxREFBNkM7QUFFN0MsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDO0FBUXJCOzs7Ozs7Ozs7Ozs7Ozs7OztNQWlCTTtBQUVOLEtBQUssVUFBVSxJQUFJLENBQWlCLFNBQTJCLEVBQUUsT0FBa0I7SUFDbEYsTUFBTSxPQUFPLEdBQUcsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDekQsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDL0MsT0FBTyxPQUFPLEtBQUssU0FBUyxDQUFDLFFBQVEsQ0FBQztBQUN2QyxDQUFDO0FBRUQsa0JBQWUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFVLENBQUM7QUFFckMsS0FBSyxVQUFVLEdBQUcsQ0FBaUIsU0FBMkIsRUFBRSxPQUFrQjtJQUNqRixNQUFNLE9BQU8sR0FBNEIsRUFBRSxDQUFDO0lBRTVDLEtBQUssTUFBTSxVQUFVLElBQUksU0FBUyxDQUFDLFNBQVMsRUFBRTtRQUM3QyxPQUFPLENBQUMsSUFBSSxDQUFDLHdCQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztLQUN4RDtJQUVELE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM3QixDQUFDO0FBRVksUUFBQSxPQUFPLEdBQXFCO0lBQ3hDLElBQUk7SUFDSixRQUFRLEVBQUUsQ0FBQztJQUNYLFNBQVMsRUFBRTtRQUNWO1lBQ0MsUUFBUSxFQUFFLENBQUM7WUFDWCxTQUFTLEVBQUU7Z0JBQ1Y7b0JBQ0MsSUFBSSxFQUFFLFNBQVM7b0JBQ2YsU0FBUyxFQUFFLElBQUk7aUJBQ2Y7YUFDRDtTQUNEO1FBQ0Q7WUFDQyxRQUFRLEVBQUUsQ0FBQztZQUNYLFNBQVMsRUFBRTtnQkFDVjtvQkFDQyxJQUFJLEVBQUUsUUFBUTtvQkFDZCxTQUFTLEVBQUUsSUFBSTtpQkFDZjthQUNEO1NBQ0Q7S0FDRDtDQUNELENBQUMifQ==