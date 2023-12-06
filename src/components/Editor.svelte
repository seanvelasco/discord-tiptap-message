<script lang="ts">
	import { onMount } from 'svelte'
	import { createEditor, Editor, EditorContent } from 'svelte-tiptap'
	import Document from '@tiptap/extension-document'
	import Text from '@tiptap/extension-text'
	import Paragraph from '@tiptap/extension-paragraph'
	import Mention from '@tiptap/extension-mention'
	import Bold from '@tiptap/extension-bold'
	import Italic from '@tiptap/extension-italic'
	import Strike from '@tiptap/extension-strike'
	import Blockquote from '@tiptap/extension-blockquote'
	import Code from '@tiptap/extension-code'
	import CodeBlock from '@tiptap/extension-code-block'
	import BubbleMenuExtension from '@tiptap/extension-bubble-menu'
	import Placeholder from '@tiptap/extension-placeholder'
	import { Spoiler } from '$lib/tiptap/spoiler'
	import type { Readable } from 'svelte/store'
	import BubbleMenu from './BubbleMenu.svelte'
	import tippy from 'tippy.js'

	const suggestion = {
		render: () => {
			let popup: any

			return {
				onStart: (props: any) => {
					popup = tippy('body', {
						getReferenceClientRect: props.clientRect,
						appendTo: () => document.body,
						content: 'User/channel autocomplete popover WIP',
						showOnCreate: true,
						interactive: true,
						trigger: 'manual',
						placement: 'top-start'
					})

					console.log(props)
				},
				onUpdate(props: any) {
					return
				},
				onKeyDown(props: any) {
					if (props.event.key === 'Escape') {
						popup[0].hide()

						return true
					}
				},
				onExit() {
					if (popup[0]) {
						popup[0].destroy()
					}
					// Delete popover
				}
			}
		},
		items: ({ query }: { query: any }) => {
			return [
				'Lea Thompson',
				'Cyndi Lauper',
				'Tom Cruise',
				'Madonna',
				'Jerry Hall',
				'Joan Collins',
				'Winona Ryder',
				'Christina Applegate',
				'Alyssa Milano',
				'Molly Ringwald',
				'Ally Sheedy',
				'Debbie Harry',
				'Olivia Newton-John',
				'Elton John',
				'Michael J. Fox',
				'Axl Rose',
				'Emilio Estevez',
				'Ralph Macchio',
				'Rob Lowe',
				'Jennifer Grey',
				'Mickey Rourke',
				'John Cusack',
				'Matthew Broderick',
				'Justine Bateman',
				'Lisa Bonet'
			]
				.filter((item) => item.toLowerCase().startsWith(query.toLowerCase()))
				.slice(0, 5)
		}
	}

	const placeholder = Placeholder.configure({
		placeholder: "Press '@' to mention people and channels"
	})

	const mention = Mention.configure({
		HTMLAttributes: {
			class: 'mention'
		},
		suggestion
	})

	let editor: Readable<Editor>
	$: isEditable = true
	$: imageSrc = ''

	onMount(() => {
		editor = createEditor({
			extensions: [
				Document,
				Paragraph,
				placeholder,
				Text,
				mention,
				Bold,
				Italic,
				Strike,
				Spoiler,
				Code,
				CodeBlock,
				BubbleMenuExtension,
				Blockquote
			],
			content:
				`Hello world!` +
				`<pre><code>Select text to open options</code></pre>` +
				`<blockquote>Use Discord-style markdown <code>*</code> <code>**</code> <code>~~</code> <code>></code> <code>|</code></blockquote>` +
				`<p>Write something...</p>`,
			editable: isEditable
		})
	})
</script>

{#if $editor}
	<main>
		<div class="avatar">
			<input type="file" />
			<img src="/avatar.jpg" alt="Placeholder avatar" />
		</div>
		<div class="content">
			<div class="author">
				<p class="name" contenteditable="true">Discord User</p>
				<time datetime="">{new Date().toLocaleDateString()}</time>
			</div>
			<BubbleMenu editor={$editor} />
			<EditorContent editor={$editor}></EditorContent>
		</div>
	</main>
{/if}

<style>
	.name {
		font-size: 1rem;
		font-weight: 500;
		line-height: 1.375rem;
	}

	.avatar {
		width: fit-content;
		padding-top: 1.0625rem;
		padding-left: 1.0625rem;
	}

	.avatar input {
		display: none;
	}

	.avatar img {
		cursor: pointer;
		display: block;
		height: 2.5rem;
		width: 2.5rem;
		border-radius: 50%;
		object-fit: cover;
	}

	.mention {
		color: pink;
		background-color: aliceblue;
	}
	main {
		margin-top: 1.0625rem;
		background-color: #313338;
		display: flex;
		flex-direction: row;
		color: #dcdee1;
		border-radius: 8px;
		width: 100%;
		max-width: 46rem;
		overflow: auto;
		min-height: 2.75rem;
	}

	.content {
		flex: 1;
		margin-top: 1.0625rem;
		margin-left: 1.0625rem;
		width: calc(100% - 74px);
	}

	:global(.tiptap) {
		padding-bottom: 1.0625rem;
		padding-right: 1.0625rem;
		overflow: auto;
		border: none;
		white-space: break-spaces;
		word-wrap: break-word;
		font-size: 1rem;
		line-height: 1.375rem;
	}

	/* :global(.tiptap p.is-editor-empty:first-child::before) {
		color: #adb5bd;
		content: attr(data-placeholder);
		float: left;
		height: 0;
		pointer-events: none;
	} */

	:global(.tiptap p.is-empty::before) {
		color: #787f87;
		content: attr(data-placeholder);
		float: left;
		height: 0;
		pointer-events: none;
	}

	:global(code) {
		/* background-color: #1e1f22; */
		padding: 0 0.25rem;
		border-radius: 4px;
		color: white;
		background-color: #393b40;
		white-space: break-spaces;
		font-family:
			Consolas,
			Andale Mono WT,
			Andale Mono,
			Lucida Console,
			Lucida Sans Typewriter,
			DejaVu Sans Mono,
			Bitstream Vera Sans Mono,
			Liberation Mono,
			Nimbus Mono L,
			Monaco,
			Courier New,
			Courier,
			monospace;
	}

	:global(pre) {
		background-color: #2b2d30;
		border: 1px solid #202123;
		border-radius: 6px;
		color: white;
		padding: 0.5rem;
		margin-top: 0;
	}
	:global(pre code) {
		background-color: inherit;
	}

	:global(blockquote) {
		border-left: 4px solid #4f545c;
		/* border-radius: 1px; */
		/* background-color: #4f545c; */
		padding-left: 1rem;
		margin: 0;
	}
	:global(.spoiler) {
		all: unset;
		font-size: 1rem;
		line-height: 1.375rem;
		background-color: black;
		color: transparent;

		border-radius: 4px;
		cursor: pointer;
		user-select: none;
	}

	.author {
		display: flex;
		flex-direction: row;
		align-items: baseline;
		gap: 0.25rem;
	}

	time {
		font-size: 0.75rem;
		color: #899099;
		line-height: 1.375rem;
	}
</style>
