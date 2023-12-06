<script lang="ts">
	import { BubbleMenu } from 'svelte-tiptap'
	import BoldIcon from '../icons/BoldIcon.svelte'
	import ItalicIcon from '../icons/ItalicIcon.svelte'
	import QuoteIcon from '../icons/QuoteIcon.svelte'
	import SpoilerIcon from '../icons/SpoilerIcon.svelte'
	import StrikeIcon from '../icons/StrikeIcon.svelte'
	import CodeIcon from '../icons/CodeIcon.svelte'
	import type { Editor } from 'svelte-tiptap'
	export let editor: Editor
</script>

<BubbleMenu {editor} tippyOptions={{ duration: 100 }}>
	<div class="bubble-menu">
		<button
			on:click={() => editor.chain().focus().toggleBold().run()}
			style:background-color={editor.isActive('bold') ? ' #313338' : ''}
		>
			<BoldIcon />
		</button>
		<button
			on:click={() => editor.chain().focus().toggleItalic().run()}
			style:background-color={editor.isActive('italic') ? ' #313338' : ''}
		>
			<ItalicIcon />
		</button>
		<button
			on:click={() => editor.chain().focus().toggleStrike().run()}
			style:background-color={editor.isActive('strike') ? ' #313338' : ''}
		>
			<StrikeIcon />
		</button>
		<button
			on:click={() => editor.chain().focus().toggleBlockquote().run()}
			style:background-color={editor.isActive('blockquote') ? ' #313338' : ''}
		>
			<QuoteIcon />
		</button>
		<button
			on:click={() => editor.chain().focus().toggleCode().run()}
			style:background-color={editor.isActive('code') ? ' #313338' : ''}
		>
			<CodeIcon />
		</button>
		<button
			on:click={() => editor.chain().focus().toggleSpoiler().run()}
			style:background-color={editor.isActive('spoiler') ? ' #313338' : ''}
		>
			<SpoilerIcon />
		</button>
	</div>
</BubbleMenu>

<style>
	.bubble-menu {
		background-color: #1e1f22;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 4px;
		border: 1px solid #1e1f22;
	}
	.bubble-menu button {
		all: unset;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.375rem;
		border-radius: 4px;
	}
	.bubble-menu button:hover {
		background-color: #313338;
		color: white;
	}
</style>
