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

<div id="sidebar" class={open ? "open" : ""}>
    <div class="sidebar-title">Table of Contents</div>
    {#each groups.values() as g}
        <SidebarGroup group={g} bind:selected></SidebarGroup>
    {/each}
</div>
