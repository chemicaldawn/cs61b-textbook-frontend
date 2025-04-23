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

<style>
    div.sidebar-group {

        div.sidebar-chapter {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            img {
                width: 1rem;
                transition: transform 75ms, background-color 75ms;

                border-radius: 1rem;
                padding: 0.2rem;
            }

            img:hover {
                background-color: rgba(255, 255, 255, 0.073);
            }
        }

        .subitems-container {
            display: grid;
            grid-template-rows: 0fr;

            transition: grid-template-rows 150ms ease-in-out;
        }

        .subitems-container.open {
            grid-template-rows: 1fr;
        }

        .subitems {
            overflow: hidden;
        }
    }

    div.sidebar-group.open {
        grid-template-rows: 1fr 0fr;
    }
</style>