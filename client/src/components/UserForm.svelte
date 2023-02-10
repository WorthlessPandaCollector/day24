<script lang="ts">
    import axios from "axios";

    let name: string = "";
    let platform: string ="";
    let releaseYear: number =0;
    let genre: string = "";
    let ESRB: string = "";
    let slaps: boolean = null
    
    async function submitForm() {
        const result = await axios.post("http://localhost:3002/games", {
            name: name,
            platform: platform,
            releaseYear: releaseYear,
            genre: genre,
            ESRB: ESRB,
            slaps: slaps

        })
        console.log(result);
    };

</script>


<input bind:value={name} type="text" placeholder ="Name" />
<input bind:value={platform} type="text" placeholder ="Platform" />
<input bind:value={releaseYear} type="number" placeholder = "Release Year" />
<input bind:value={genre} type="text" placeholder = "Genre" />
<input bind:value={ESRB} type="text" placeholder = "ESRB rating" />
<input bind:value={slaps} type="text" placeholder = "slaps?" />
<br />
<button on:click={async () => await submitForm()}>Submit</button>



