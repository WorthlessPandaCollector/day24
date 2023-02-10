<script lang ="ts">
  import axios from "axios";
  import { onMount } from "svelte";


  let games = [];
  let selectedGame = {
    name: "",
    platform: "",
    releaseYear: "",
    genre: "",
    ESRB: "",
    slaps: "",
    gameId: "",
  };

  async function getGameList() {
    const result = await axios.get("http://localhost:3002/games");
    return result.data;
  }

  onMount(async function () {
    games = await getGameList();
  });

  let showModal = false;

  function toggleModal(game) {
    selectedGame = game;
    showModal = !showModal;
    console.log(selectedGame);
  }

  async function submitEdits(selectedGame) {
    const result = await axios.put(
      "http://localhost:3002/games/" + selectedGame.gameId,
      {
        name: selectedGame.name,
        platform: selectedGame.platform,
        releaseYear: selectedGame.releaseYear,
        genre: selectedGame.genre,
        ESRB: selectedGame.ESRB,
        slaps: selectedGame.slaps,
      }

    );
  }

</script>

{#each games as game}<button on:click={() => toggleModal(game)}>
    <br />
    {game.name}
    {game.platform}
    {game.releaseYear}
    {game.genre}
    {game.ESRB}
    {game.slaps}<br />
  </button>
{/each}

{#if showModal}
  <div class="modal">
    <h2><input bind:value={selectedGame.name} type="text" /></h2>
    <p><input bind:value={selectedGame.platform} type="text" /></p>
    <p>
      <input bind:value={selectedGame.releaseYear} type="number" />
      <input bind:value={selectedGame.genre} type="text" />
      <input bind:value={selectedGame.ESRB} type="text" />
      <input bind:value={selectedGame.slaps} type="check" />
    </p>


    <button on:click={async () => 
    {
      submitEdits(selectedGame); 
      console.log(games); 
      games = await getGameList();
      showModal = false;
    }
    }>
    Submit Edit
  </button>
    <button on:click={toggleModal}>Close Modal</button>
  </div>
{/if}
