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

<div id="pagemap" class="container">
    <div class="pagemap-title">On this page</div>
    <div id="pagemap-content">
        {#if headers && headers.length == 0}
            <div class="pagemap-heading">🦗</div>
        {/if}
        {#each headers as header : HTMLHeadingElement}
            <div class="pagemap-heading" on:click={() => {goToHeader(header)}}>{header.innerText}</div>
        {/each}
    </div>    
</div>

<style>
    div#pagemap {
		flex-grow: 0;
		min-width: 18vw;
		max-width: 18vw;

		padding: 1rem;

		background-color: light-dark(var(--background-light), var(--background-dark));
		
		div.pagemap-title {
			color: light-dark(var(--muted-light), var(--muted-dark));
		}

		div.pagemap-heading {
            color: light-dark(var(--text-light), var(--text-dark));
			font-size: var(--sidebar-size);
            font-weight: var(--sidebar-weight);

			margin-left: 0.5rem;
			margin-top: 0.25rem;

			cursor: pointer;
		}
	}

    @media only screen and (max-width: 740px) {
        div#pagemap {
            display: none;
        }
    }   

    div#pagemap-content {
		opacity: 1;
		transition: opacity 100ms ease-in-out;
	}

	div#pagemap-content.hidden {
		opacity: 0;
	}
</style>