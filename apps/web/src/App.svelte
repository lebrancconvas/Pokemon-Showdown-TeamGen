<script lang="ts">
  let searchName = "";

  const generated = () => {
    console.log(searchName); 
  };
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
    <div>
      <p>Image Section</p>
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

  input {
    height: 30px;
    width: 30%;
  }
</style>