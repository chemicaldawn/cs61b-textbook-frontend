<script lang="ts">
    import SidebarGroup from "./sidebar-group.svelte";

    let { groups } = $props();
    let selected = $state("")
</script>

{#each groups.values() as g}
    <SidebarGroup group={g} bind:selected></SidebarGroup>
{/each}