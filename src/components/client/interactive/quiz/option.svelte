<script lang=ts>
    import { onMount } from "svelte";

    const { text, explanation="", correct=false } = $props()
    let optionDiv : HTMLDivElement;
    let parent : HTMLElement;

    onMount(() => {
        parent = optionDiv!.parentElement!
    })

    function onClick() {
        console.log("bruh")

        parent.querySelectorAll(".option").forEach((option) => {
            option.classList.remove("selected")
        })

        optionDiv.classList.add("selected")
    }

</script>

<div bind:this={optionDiv} on:click={onClick} class="option">
    { text }
</div>

<style>
    .option {
        border-radius: 0.4rem;

        margin: 0;
        padding: 0.2rem;
    }

    .option.selected {
        background-color: red;
    }
</style>