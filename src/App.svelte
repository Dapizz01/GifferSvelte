<script>
	import Header from "./components/Header.svelte";
	import Navbar from "./components/Navbar.svelte";
	import Footer from "./components/Footer.svelte";
	import InputVideo from "./components/InputVideo.svelte";
	import SelectFrame from "./components/SelectFrame.svelte";
	import RenderGIF from "./components/RenderGIF.svelte";

	let tabs = ["Input a video", "Choose first frame", "Render GIF"];
	let activeTab = "Input a video";

	const handleChangeTab = (e) => {
		activeTab = e.detail
	}
</script>

<svelte:head>
	<script src="https://bundle.run/pixelmatch@5.2.0"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/gif.js/0.2.0/gif.js" integrity="sha512-nNOFtIS+H0lwgdUDaPn/g1ssw3uN9AkEM7zy2wLaTQeLQNeNiitUcLpEpDIh3Z4T22MdeTNru/SQbNM4ig2rng==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</svelte:head>

<main>
	<Header></Header>
	<Navbar {tabs} {activeTab} on:changeTab={handleChangeTab} ></Navbar>
	{#if activeTab === "Input a video"}
		<InputVideo></InputVideo>
	{:else if activeTab === "Choose first frame"}
		<SelectFrame></SelectFrame>
	{:else if activeTab === "Render GIF"}
		<RenderGIF></RenderGIF>
	{/if}
	<Footer></Footer>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>