<script lang="ts">
  import { onMount } from 'svelte';
  import axios from 'axios';
  let searchName = "";
  let pokemonData: any = "";

  const capitalized = (word: string): string => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  const generated = async() => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchName.toLowerCase()}`);
    pokemonData = response.data;
    console.log(pokemonData.name);
  }

  onMount(generated);
</script>

<main>
  <header>
    <div>
      <h1>Pokemon Showdown Team Generator</h1>
    </div>
    <div>
      <h3>Generated the perfect team for your Pokemon Battle</h3>
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
      {/if}
    </div>
  </section>
  <section id="generator">
    <div id="gen-button" on:click={generated}>
      Generated       
    </div>
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