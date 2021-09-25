<script>
    import { createEventDispatcher } from "svelte";
    export let tabs;
    export let activeTab;

    let dispatch = createEventDispatcher()

</script>

<div>
    <ul>
        {#each tabs as tab}
            <li class:active={tab === activeTab} on:click={() => dispatch("changeTab", tab)}>{ tab }</li>
        {/each}
    </ul>
</div>

<style>
    ul{
        list-style-type: none;
    }
    li{
        cursor: pointer;
    }
</style>