<!-- <script lang = "ts">
    import axios from "axios";

    let name: string = "";
    let platform: string ="";
    let releaseYear: number =0;
    let genre: string = "";
    let ESRB: string = "";
    let slaps: boolean = null

    
  async function editGame(game) {
    console.log("edit", game.gameId);
    const result = await axios.put(
      "http://localhost:3002/games/" + game.gameId
    );
  }

</script>


<input bind:value={name} type="text" placeholder ="Name" />
<input bind:value={platform} type="text" placeholder ="Platform" />
<input bind:value={releaseYear} type="number" placeholder = "Release Year" />
<input bind:value={genre} type="text" placeholder = "Genre" />
<input bind:value={ESRB} type="text" placeholder = "ESRB rating" />
<input bind:value={slaps} type="text" placeholder = "slaps?" /> -->