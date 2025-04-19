/*
 * Vencord, a modification for Discord's desktop app
 * Copyright (c) 2022 Vendicated and contributors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import definePlugin from "@utils/types";

export default definePlugin({
    name: "CollapsibleSidebar",
    description: "Brings back visual refreshes collapsible sidebar that they removed for some reason",
    authors: [{ name: "scattagain", id: 1098234477626544180n }],

    patches: [
        {
            find: "\"ChannelSidebar\"",
            replacement: {
                match: /\(0,.\...\)\("ChannelSidebar"\)/,
                replace: "true"
            }
        },
        {
            find: "\"AppTitleBar\"",
            replacement: {
                match: /\(0,.\...\)\("AppTitleBar"\)/,
                replace: "true"
            }
        },
    ],
});
