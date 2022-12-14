"use strict";
/*
 * Project: @resnovas/smartcloud
 * File: logging.ts
 * Path: \src\logging.ts
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
exports.log = exports.LoggingLevels = void 0;
const tslib_1 = require("tslib");
const core = tslib_1.__importStar(require("@actions/core"));
var LoggingLevels;
(function (LoggingLevels) {
    LoggingLevels[LoggingLevels["unknown"] = 0] = "unknown";
    LoggingLevels[LoggingLevels["debug"] = 100] = "debug";
    LoggingLevels[LoggingLevels["info"] = 200] = "info";
    LoggingLevels[LoggingLevels["notice"] = 300] = "notice";
    LoggingLevels[LoggingLevels["warn"] = 400] = "warn";
    LoggingLevels[LoggingLevels["error"] = 500] = "error";
    LoggingLevels[LoggingLevels["critical"] = 600] = "critical";
    LoggingLevels[LoggingLevels["alert"] = 700] = "alert";
    LoggingLevels[LoggingLevels["emergency"] = 800] = "emergency";
})(LoggingLevels = exports.LoggingLevels || (exports.LoggingLevels = {}));
/**
 * Logging function used throught the package.
 */
function log(name, message) {
    const type = Number(name) / 100;
    if (type === 1) {
        core.debug(message);
    }
    else if (type < 4) {
        core.info(message);
    }
    else if (type === 4) {
        core.warning(message);
    }
    else if (type < 7) {
        core.error(message);
    }
    else {
        core.setFailed(message);
    }
    return message;
}
exports.log = log;
exports.default = log;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2luZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2dnaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FzQ0c7Ozs7QUFFSCw0REFBc0M7QUFFdEMsSUFBWSxhQVVYO0FBVkQsV0FBWSxhQUFhO0lBQ3hCLHVEQUFXLENBQUE7SUFDWCxxREFBVyxDQUFBO0lBQ1gsbURBQVUsQ0FBQTtJQUNWLHVEQUFZLENBQUE7SUFDWixtREFBVSxDQUFBO0lBQ1YscURBQVcsQ0FBQTtJQUNYLDJEQUFjLENBQUE7SUFDZCxxREFBVyxDQUFBO0lBQ1gsNkRBQWUsQ0FBQTtBQUNoQixDQUFDLEVBVlcsYUFBYSxHQUFiLHFCQUFhLEtBQWIscUJBQWEsUUFVeEI7QUFFRDs7R0FFRztBQUNILFNBQWdCLEdBQUcsQ0FDbEIsSUFBbUIsRUFDbkIsT0FBZTtJQUVmLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDaEMsSUFBSSxJQUFJLEtBQUssQ0FBQyxFQUFFO1FBQ2YsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUNwQjtTQUFNLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRTtRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ25CO1NBQU0sSUFBSSxJQUFJLEtBQUssQ0FBQyxFQUFFO1FBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDdEI7U0FBTSxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUU7UUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUNwQjtTQUFNO1FBQ04sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUN4QjtJQUVELE9BQU8sT0FBTyxDQUFDO0FBQ2hCLENBQUM7QUFsQkQsa0JBa0JDO0FBRUQsa0JBQWUsR0FBRyxDQUFDIn0=