<script>
    const { question } = $props()
</script>

<div class="knowledge-check">
    <p class="question">
        { question }
    </p>
    <slot />
</div>

<style>
    .knowledge-check {

        .question {
            font-size: 1.2rem;
            font-weight: 600;

            margin-top: 0;
        }

        background-color: var(--darker);

        border: 1px solid var(--border);
        border-radius: 0.4rem;
        padding: 1rem;
    }
</style>