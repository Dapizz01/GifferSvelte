<script>
    import { videoURL, frames, maxLength, similarityData, videoWidth, videoHeight } from "../stores/Store.js";

    async function collectFrames(){
        let video = document.querySelectorAll("video")[0]
        let canvas = document.querySelectorAll("canvas")[0]
        let ctx = canvas.getContext("2d")

        for(let i = 0; i < $maxLength; i++){
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
            let frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
            frames.update((oldFrames) => {
                return oldFrames = [frame, ...oldFrames]
            })
            await video.seekToNextFrame();
        }
    }

    function calculateSimilarity(){
        let video = document.querySelectorAll("video")[0]
        let similarity = Array()

        for(let i = 1; i < $maxLength; i++){
            similarity.push({
                frame: i,
                value: pixelmatch($frames[0].data, $frames[i].data, null, video.videoWidth, video.videoHeight)
            })
        }

        similarity.sort((a, b) => {
            return a.value - b.value
        })

        similarityData.update(() => {
            return similarity
        })
    }

    const handleChosenFrame = async () => {
        let canvas = document.querySelectorAll("canvas")[0]
        let video = document.querySelectorAll("video")[0]

        canvas.width = video.videoWidth
        canvas.height = video.videoHeight

        videoWidth.update(() => {
            return video.videoWidth
        })

        videoHeight.update(() => {
            return video.videoHeight
        })

        await collectFrames()

        calculateSimilarity()

        console.log($similarityData)
    }

</script>

<div>
    This is where the user selects a frame
    {#if $videoURL === undefined}
        <div>
            Input a video first
        </div>
    {:else}
        <video src={$videoURL}></video>
        <button on:click={handleChosenFrame}>Select this frame</button>
        <canvas></canvas>
    {/if}
</div>