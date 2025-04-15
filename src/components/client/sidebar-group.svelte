<script lang="ts">
    import { isTemplateExpression } from "typescript";
    import { SidebarGroup } from "../lib";
    import SidebarItem from "./sidebar-item.svelte";

    import Chevron from "../../assets/images/chevron.svg"
    import { onMount } from "svelte";

    let { group, selected = $bindable()}: { group : SidebarGroup, selected : string } = $props()

    let subitems : HTMLDivElement;

    let open = $state(false)

    let rotation = $derived(open ? 0 : -90)

    function openSection() {
        open = true;
    }

    function handleClick() {
        console.log("please")
        open = !open
    }
</script>

<div class="sidebar-group">
    <div class="sidebar-chapter">
        <SidebarItem item={group.primary} bind:selected bind:open></SidebarItem>
        <img on:click={handleClick} style={`transform: rotate(${rotation}deg); ${group.secondary.length > 0 ? "" : "display:none"}`} alt="Menu open" src={Chevron.src} />
    </div>
    <div class={open ? "subitems-container open" : "subitems-container"}>
        <div bind:this={subitems} class="subitems">
            {#each group.secondary as item}
                <SidebarItem item={item} open={open} bind:selected></SidebarItem>
            {/each}
        </div>
    </div>
</div>