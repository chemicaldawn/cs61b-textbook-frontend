<script lang="ts">
    import jQuery from "jquery";
    import { isTemplateExpression } from "typescript";
    import { SidebarItem } from "../lib";
    import { onMount } from "svelte";

    let {
        item,
        selected = $bindable(),
        open = $bindable(),
    }: { item: SidebarItem; selected: string; open: boolean } = $props();

    let content: HTMLElement;
    let pagemapContent: HTMLElement;

    let items: NodeListOf<HTMLDivElement>;
    let classList = $derived(
        item.slug == selected ? item.classList + " active" : item.classList,
    );

    onMount(() => {
        content = document.getElementById("content")!;
        pagemapContent = document.getElementById("pagemap-content")!;

        items = document.querySelectorAll("div.sidebar-item");

        if (item.startsActive) {
            selected = item.slug;

            if (item.isChapter) {
                open = true;
            }
        }
    });

    function handleClick() {
        if (item.isChapter && selected == item.slug) {
            open = !open;
        } else if (item.isChapter) {
            open = true;
        }

        if (selected != item.slug) {
            selected = item.slug;
            content.classList.add("hidden");
            pagemapContent.classList.add("hidden");

            setTimeout(() => {
                jQuery.get(item.url, (data) => {
                    content!.innerHTML = data;

                    history.pushState("", "", item.pushUrl);

                    content.scrollTo(0, 0);
                    content.classList.remove("hidden");
                    pagemapContent.classList.remove("hidden");
                });

                /*
                jQuery.get(item.pagemapUrl!, (data) => {
                    pagemap!.innerHTML = data
                })
                */
            }, 100);
        }
    }
</script>

<div class={classList} on:click={handleClick}>
    <div
        class="section"
        style={Math.floor(Number(item.section)) == 0 ? "display:none" : ""}
    >
        {item.section}
    </div>
    <div class="name">{item.title}</div>
</div>

<style>
    div.sidebar-item {
        display: flex;

        flex-direction: row;
        gap: 0.75rem;

        margin-top: 0.5rem;
        margin-bottom: 0.5rem;

        cursor: pointer;
        user-select: none;
        transition: margin 100ms;

        div.section {
            color: rgb(96, 96, 96);
            font-size: var(--sidebar-size);
            font-weight: var(--sidebar-weight);
        }

        div.name {
            color: var(--text-color);
            font-size: var(--sidebar-size);
            font-weight: var(--sidebar-weight);

            transition: color 300ms;
        }
    }

    div.sidebar-item:hover {
        margin-left: 0.5rem;

        div.name {
            color: light-dark(var(--accent-low-light), var(--accent-low-dark)) !important;
        }
    }

    div.sidebar-item.active {
        margin-left: 1rem !important;

        div.name {
            color: light-dark(var(--accent-high-light), var(--accent-high-dark)) !important;
        }
    }

    div.sidebar-item.section {
        padding-left: 2rem;
        margin-top: 0rem !important;
        margin-bottom: 0.25rem !important;

        div.name {
            color: rgb(207, 207, 207);
        }
    }
</style>
