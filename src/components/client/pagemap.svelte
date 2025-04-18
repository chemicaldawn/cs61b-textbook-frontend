<script lang="ts">
    import { onMount } from "svelte";

    let content : HTMLDivElement;
    let headers : NodeListOf<HTMLHeadingElement>;
    let observer : MutationObserver;

    function readHeaders() {
        headers = content.querySelectorAll<HTMLHeadingElement>("h4")!
    }

    function goToHeader(e : HTMLHeadingElement) {
        e.scrollIntoView()
        content.scrollBy(0, -18)
    }

    onMount(() => {
        content = document.querySelector("div#content")!

        observer = new MutationObserver((mutations, observer) => {
            console.log("Mutated")
            readHeaders()
        })

        observer.observe(content, 
        {
            childList: true,
            subtree: false,
            characterData: true
        })

        readHeaders()
    })
</script>

<div class="pagemap-title">On this page</div>
<div id="pagemap-content">
    {#if headers && headers.length == 0}
        <div class="pagemap-heading">🦗</div>
    {/if}
    {#each headers as header : HTMLHeadingElement}
        <div class="pagemap-heading" on:click={() => {goToHeader(header)}}>{header.innerText}</div>
    {/each}
</div>
