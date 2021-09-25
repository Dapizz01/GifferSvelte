<script>
    import { similarityData, frames, videoWidth, videoHeight, maxLength } from "../stores/Store.js";

    const createGIF = (() => {
        let selectedIndex = document.querySelectorAll("select")[0].selectedIndex
        let selectedValue = document.querySelectorAll("option")[selectedIndex].value

        let gif = new GIF({
            workers: 4,
            quality: 10,
            width: videoWidth,
            height: videoHeight,
            workerScript: "https://cdnjs.cloudflare.com/ajax/libs/gif.js/0.2.0/gif.worker.js"
        })

        for(let i = 0; i < selectedValue; i++){
            gif.addFrame($frames[i], {delay: 42})
            console.log("ADDED FRAME")
        }

        gif.on("finished", (blob) => {
            console.log("GIF DONE")
            let result = URL.createObjectURL(blob)
            window.open(result)
        })

        gif.render()
    })

</script>

<div>
    <select size="10">
        {#each $similarityData as data}
            <option value={data.frame}>Frame {data.frame} - Similarity {data.value}</option>
        {/each}
    </select>
    <button on:click={createGIF}>Create GIF</button>
</div>