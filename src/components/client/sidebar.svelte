<script lang="ts">
    import { onMount } from "svelte";
    import SidebarGroup from "./sidebar-group.svelte";

    let { groups } = $props();
    let open = $state(false)
    let selected = $state("")

    onMount(() => {
        document.getElementById("hamburger")?.addEventListener("click", () => {
            open = !open
        })
    })
</script>

<div id="sidebar" class={open ? "container open" : "container"}>
    <div class="sidebar-title">Table of Contents</div>
    {#each groups.values() as g}
        <SidebarGroup group={g} bind:selected></SidebarGroup>
    {/each}
</div>

<style>
    div#sidebar {
		flex-grow: 0;
		min-width: 18vw;
		max-width: 18vw;

		overflow-x: hidden;
		overflow-y: scroll;

		padding: 1rem;

		background-color: light-dark(var(--background-light), var(--background-dark));
		border-right: 0.5px solid var(--border);

		div.sidebar-title {
			color: rgb(107, 106, 104);
		}
	}

    @media only screen and (max-width: 740px) {

		div#sidebar {
			width: 75vw;
			max-width: 75vw !important;
			height: 100%;
			position: fixed;

			transform: translateX(-100%);
			z-index: 2;

			transition: transform 150ms ease-in-out;
		}
		
		div#sidebar.open {
			transform: translateX(0) !important;
		}
	}
</style>