<script lang="ts">
	import Editor from '../components/Editor.svelte'
	let containerElement: HTMLElement
</script>

<!-- <button
	on:click={() => {
		isEditable = !isEditable
		$editor.setEditable(isEditable)
	}}>{isEditable}</button
> -->

<div bind:this={containerElement} class="container">
	<button
		class="new-message"
		on:click={() =>
			new Editor({
				target: containerElement
			})}>New message</button
	>
	<Editor />
</div>

<style>
	.new-message {
		align-self: flex-end;
	}

	.container {
		margin-top: 1rem;
		height: 100%;
		width: 100%;
		max-width: 46rem;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		place-items: center;
	}
</style>
