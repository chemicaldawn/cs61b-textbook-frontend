<script>
    import Light from "../../assets/images/theme/light.svg"
    import Device from "../../assets/images/theme/device.svg"
    import Dark from "../../assets/images/theme/dark.svg"

    let selected = $state(1)
    let colorMap = {
        0 : "light",
        1 : "light dark",
        2 : "dark"
    }

    $effect(() => {
        document.body.style.colorScheme = colorMap[selected]
    })
</script>

<div id="theme-switch">
    <svg on:click={() => {selected = 0}} class={selected == 0 ? "variable selected" : "variable"} >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
    </svg>
    <svg on:click={() => {selected = 1}} class={selected == 1 ? "variable selected" : "variable"}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-monitor-smartphone-icon lucide-monitor-smartphone"><path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"/><path d="M10 19v-3.96 3.15"/><path d="M7 19h5"/><rect width="6" height="10" x="16" y="12" rx="2"/></svg>
    </svg>
    <svg on:click={() => {selected = 2}} class={selected == 2 ? "variable selected" : "variable"}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon-icon lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
    </svg>
</div>

<style>
    div#theme-switch {

        display: flex;
        flex-direction: row;
        align-items: center;

        padding: 0.2rem;
        gap: 0.2rem;

        border: 1px solid light-dark(var(--border-light), var(--border-dark));
        border-radius: 0.4rem;
        
        background-color: light-dark(var(--background-light), var(--background-dark));

        svg {
            width: 1.2rem;
            height: 1.2rem;

            border-radius: 0.25rem;
            padding: 0.4rem;

            background-color: none;
            transition: background-color 100ms;
        }

        svg:hover {
            background-color: light-dark(var(--accent-low-light), var(--accent-low-dark));
        }

        svg.selected {
            background-color: light-dark(var(--accent-high-light), var(--accent-high-dark));
        }
    }
</style>