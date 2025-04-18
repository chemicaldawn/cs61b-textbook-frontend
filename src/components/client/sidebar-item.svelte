<script lang="ts">
    import jQuery from "jquery";
    import { isTemplateExpression } from "typescript";
    import { SidebarItem } from "../lib";
    import { onMount } from 'svelte';

    let { item, selected = $bindable(), open = $bindable()}: { item : SidebarItem, selected : string, open : boolean } = $props()

    let content : HTMLElement;
    let pagemapContent : HTMLElement;

    let items : NodeListOf<HTMLDivElement>;
    let classList = $derived(item.slug == selected ? item.classList + " active" : item.classList)

    onMount(() => {
        content = document.getElementById("content")!
        pagemapContent = document.getElementById("pagemap-content")!

        items = document.querySelectorAll("div.sidebar-item")
    })

    function handleClick() {

        if (item.isChapter && selected == item.slug) {
            open = !open
        } else if (item.isChapter) {
            open = true
        }

        if (selected != item.slug) {
            
            selected = item.slug
            content.classList.add("hidden")
            pagemapContent.classList.add("hidden")

            setTimeout(() => {
                jQuery.get(item.url, (data) => {
                    content!.innerHTML = data

                    history.pushState("","",item.pushUrl)

                    content.scrollTo(0,0)
                    content.classList.remove("hidden")
                    pagemapContent.classList.remove("hidden")
                })

                /*
                jQuery.get(item.pagemapUrl!, (data) => {
                    pagemap!.innerHTML = data
                })
                */
                
            }, 100)
        }
    }
</script>

<div class={classList} on:click={handleClick}>
    <div class="section" style={Math.floor(Number(item.section)) == 0 ? "display:none" : ""}>{item.section}</div>
    <div class="name">{item.title}</div>
</div>