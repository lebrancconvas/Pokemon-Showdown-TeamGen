<script lang="ts">
  import { onMount } from 'svelte';
  import axios from 'axios';
  let searchName = "";
  let pokemonData: any = "";
  let loading = false;

  const capitalized = (word: string): string => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  const generated = async() => {
    try {
      loading = true;
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchName.toLowerCase()}`);
      pokemonData = response.data;
      loading = false;
      console.log(pokemonData.name);
    } catch(err) {
      loading = false;
      console.error(err);
      pokemonData = "Not Found";
    }
  }

  onMount(generated);
</script>

<main>
  <header>
    <div>
      <h1>Pokemon Search</h1>
    </div>
    <div>
      <h3>Search your favorite Pokemon</h3> 
    </div>
  </header>
  <section id="search">
    <div>
      <input type="text" placeholder="Search Pokemon Name" bind:value={searchName} required>
    </div>
  </section>
  <section id="image">
    <div id="image-section">
      {#if pokemonData.name !== undefined}
        <img src={pokemonData.sprites.front_default} alt={pokemonData.name}>  
        <div id="details-button">
          Details
        </div>
      {:else if loading === true}
        <p>Loading...</p>  
      {:else if pokemonData === "Not Found"}
        <p>Don't Found the Pokemon that you've searched.</p> 
      {/if}
    </div>
  </section>
  <section id="generator">
    {#if searchName !== ""}
      <div id="gen-button" on:click={generated}>
        Generated       
      </div>
    {:else}
      <div id="gen-button">
        Generated
      </div>
    {/if}
  </section>
  <footer>

  </footer>
</main>

<style>
  main {
    text-align: center;
    font-family: 'Nunito', sans-serif; 
  }

  #gen-button {
    padding: 10px;
    width: 10%;
    background-color: #39A3D0FF;
    margin: 0 auto;
    cursor: pointer;
    border-radius: 5px;
  }

  #gen-button:hover {
    background-color: #44B7E8FF;
  }

  #gen-button:active {
    transform: scale(0.95);
  }

  #details-button {
    padding: 10px;
    width: 10%;
    background-color: rgb(233, 163, 33);
    margin: 0 auto;
    cursor: pointer;
    border-radius: 5px;
  }

  #details-button:hover {
    background-color: rgb(247, 208, 68);
  }

  #details-button:active {
    transform: scale(0.95);
  }

  #image-section {
    margin: 10px auto;
  }

  img {
    width: 30%;
    height: 30%;
  }

  input {
    height: 30px;
    width: 30%;
  }
</style>