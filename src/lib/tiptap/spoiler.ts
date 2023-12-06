/* eslint-disable @typescript-eslint/no-explicit-any */

import {
    Mark,
    markInputRule,
    markPasteRule,
    mergeAttributes
} from '@tiptap/core'

export const Spoiler = Mark.create({
    name: 'spoiler',

    addOptions() {
        return {
            HTMLAttributes: {
                class: 'spoiler'
            }
        }
    },

    parseHTML() {
        return [
            {
                tag: 'button'
            }
            // {
            // 	tag: 'b',
            // 	getAttrs: (node) => (node as HTMLElement).style.fontWeight !== 'normal' && null
            // }
        ]
    },

    renderHTML({ HTMLAttributes }) {
        return ['button', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0]
    },

    addCommands() {
        return {
            setSpoiler: () => ({ commands }) => {
                return commands.setMark(this.name)
            },
            toggleSpoiler: () => ({ commands }) => {
                return commands.toggleMark(this.name)
            },
            unsetSpoiler: () => ({ commands }) => {
                return commands.unsetMark(this.name)
            },
        }
    },

    // addKeyboardShortcuts() {
    // 	return {
    // 		'Mod-b': () => this.editor.commands.toggleBold(),
    // 		'Mod-B': () => this.editor.commands.toggleBold()
    // 	}
    // },

    addInputRules() {
        return [
            markInputRule({
                // find: /(?:^|\s)((?:\|)((?:[^\|]+))(?:\|))$/,
                find: /(?:^|\s)((?:\|)((?:[^|]+))(?:\|))$/,
                type: this.type
            })
        ]
    },

    addPasteRules() {
        return [
            markPasteRule({
                // find: /(?:^|\s)((?:\|)((?:[^\|]+))(?:\|))/g,
                find: /(?:^|\s)((?:\|)((?:[^|]+))(?:\|))/g,
                type: this.type
            })
        ]
    }
})

export default Spoiler