<script lang="ts">
    import { onMount } from "svelte";

    let open = $state(false)
    let hamburgerElement : HTMLDivElement

    onMount(() => {
        hamburgerElement.addEventListener('click', () => {
            open = !open;
        })
    })
</script>

<div bind:this={hamburgerElement} id="hamburger" class={ open ? "open" : ""}>
    <div class="line top-line"></div>
    <div class="line middle-line"></div>
    <div class="line bottom-line"></div>
</div>

<style>
    #hamburger {

        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        height: 1.75rem;
        width: 1.5rem;

        .line {
            min-height: 0.15rem;
            width: 100%;
            background-color: white;

            opacity: 1;

            border-radius: 0.1rem;

            transition: background-color 150ms, opacity 150ms, transform 150ms ease-in-out;
        }
    }

    #hamburger.open {

        .top-line {
            transform: rotate(45deg) translateX(0.5rem) translateY(0.2rem) scaleX(1.1);
        }

        .middle-line {
            opacity: 0;
        }

        .bottom-line {
            transform: rotate(-45deg) translateX(0.5rem) translateY(-0.2rem) scaleX(1.1);
        }
    }
</style>