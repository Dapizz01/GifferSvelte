<script>
    import { videoURL } from "../stores/Store.js";

    const handleInputVideo = (e) => {
        let file = e.target.files[0]
        let url = URL.createObjectURL(file)

        videoURL.update(() =>{
            return url;
        })
    }
</script>

<div>
    This is where the user inputs the video
    <input type="file" on:change={handleInputVideo}>
</div>