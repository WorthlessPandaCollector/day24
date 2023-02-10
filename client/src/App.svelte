<script lang="ts">
  import GameList from "./components/GameList.svelte";
  import UserForm from "./components/UserForm.svelte";

  let displayForm: boolean = true;
  function changeDisplay() {
    displayForm = !displayForm
  }
  
  
</script>

<main>
<button on:click={changeDisplay}>Change Display</button>
{#if displayForm}
<UserForm />
{:else}
<GameList />
{/if}
</main>

