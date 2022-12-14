"use strict";
/*
 * Project: @resnovas/smartcloud
 * File: not.ts
 * Path: \src\conditions\util\not.ts
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
const type = '$not';
/** Allows conditions to be combined to create more advanced conditions. Requires the following conditions to fail to return true.
@examples require(".").example
```json
{
    "type": "$not",
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
async function not(condition, context) {
    const success = await evaluator_js_1.evaluator.call(this, condition.condition, context);
    return !(success);
}
exports.default = [type, not];
exports.example = {
    type,
    condition: {
        requires: 1,
        condition: [
            {
                type: 'isDraft',
                condition: true,
            },
        ],
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbmRpdGlvbnMvdXRpbC9ub3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNDRzs7O0FBVUgscURBQTZDO0FBRTdDLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQztBQVVwQjs7Ozs7Ozs7Ozs7Ozs7OztNQWdCTTtBQUVOLEtBQUssVUFBVSxHQUFHLENBQWlCLFNBQXVCLEVBQUUsT0FBa0I7SUFDN0UsTUFBTSxPQUFPLEdBQUcsTUFBTSx3QkFBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUV6RSxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNuQixDQUFDO0FBRUQsa0JBQWUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFVLENBQUM7QUFFdkIsUUFBQSxPQUFPLEdBQWlCO0lBQ3BDLElBQUk7SUFDSixTQUFTLEVBQ1I7UUFDQyxRQUFRLEVBQUUsQ0FBQztRQUNYLFNBQVMsRUFBRTtZQUNWO2dCQUNDLElBQUksRUFBRSxTQUFTO2dCQUNmLFNBQVMsRUFBRSxJQUFJO2FBQ2Y7U0FDRDtLQUNEO0NBQ0YsQ0FBQyJ9