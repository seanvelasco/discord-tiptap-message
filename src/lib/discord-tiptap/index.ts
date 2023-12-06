import { Mark, Editor, Extension, markInputRule, Node, mergeAttributes } from '@tiptap/core'

export const Bold = Mark.create({
    name: 'bold',

    renderHTML({ HTMLAttributes }) {
        return ['strong', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0]
    },
    addInputRules() {
        return [
            markInputRule({
                find: /(?:^|\s)((?:\*\*)((?:[^*]+))(?:\*\*))$/,
                type: this.type
            }),
            markInputRule({
                find: /(?:^|\s)((?:\*)((?:[^*]+))(?:\*))$/,
                type: this.type
            })
        ]
    }
})

export const Italic = Mark.create({
    name: 'bold',

    renderHTML({ HTMLAttributes }) {
        return ['i', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0]
    },
    addInputRules() {
        return [
            markInputRule({
                find: /(?:^|\s)((?:\*\*)((?:[^*]+))(?:\*\*))$/,
                type: this.type
            })
        ]
    }
})

export const Underline = Mark.create({
    name: 'underline',

    renderHTML({ HTMLAttributes }) {
        return ['i', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0]
    },
    addInputRules() {
        return [
            markInputRule({
                find: /(?:^|\s)((?:\*\*)((?:[^*]+))(?:\*\*))$/,
                type: this.type
            })
        ]
    }
})

export const Spoiler = Mark.create({
    name: 'spoiker',

    renderHTML({ HTMLAttributes }) {
        return ['i', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0]
    },
    addInputRules() {
        return [
            markInputRule({
                find: /(?:^|\s)((?:\*\*)((?:[^*]+))(?:\*\*))$/,
                type: this.type
            })
        ]
    }
})

export const Strikethrough = Mark.create({
    name: 'strikethrough',

    renderHTML({ HTMLAttributes }) {
        return ['strong', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0]
    },
    addInputRules() {
        return [
            markInputRule({
                find: /(?:^|\s)((?:\*\*)((?:[^*]+))(?:\*\*))$/,
                type: this.type
            }),
            markInputRule({
                find: /(?:^|\s)((?:\*)((?:[^*]+))(?:\*))$/,
                type: this.type
            })
        ]
    }
})

export const InlineCode = Mark.create({
    name: 'inline-code',

    renderHTML({ HTMLAttributes }) {
        return ['strong', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0]
    },
    addInputRules() {
        return [
            markInputRule({
                find: /(?:^|\s)((?:\*\*)((?:[^*]+))(?:\*\*))$/,
                type: this.type
            }),
            markInputRule({
                find: /(?:^|\s)((?:\*)((?:[^*]+))(?:\*))$/,
                type: this.type
            })
        ]
    }
})

export const CodeBlock = Mark.create({
    name: 'code-block',

    renderHTML({ HTMLAttributes }) {
        return ['strong', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0]
    },
    addInputRules() {
        return [
            markInputRule({
                find: /(?:^|\s)((?:\*\*)((?:[^*]+))(?:\*\*))$/,
                type: this.type
            }),
            markInputRule({
                find: /(?:^|\s)((?:\*)((?:[^*]+))(?:\*))$/,
                type: this.type
            })
        ]
    }
})

// Header

// Links

// Ordered lists

// Unordered lists

// Block quootes