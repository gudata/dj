<script lang="ts">
  let background_index = Math.floor(Math.random() * 2) ;
  let backgrounds = [
    {name: "images/backgrounds/1.png", position:"-200px 0"},
    {name: "images/backgrounds/2.jpeg", position:"-150px -200px"},
  ]
  let background = backgrounds[background_index];
</script>


<div id="frame" style="background: url({background.name});background-position: {background.position};">
  <main>
    <slot></slot>
  </main>

  <a href="/">Gyms</a>
</div>


<style>
  :global(body) {
    margin: 0;
    padding: 0;
  }

  #frame {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
  }

  main {
    width:50vw;
    background-color: #8338EC;
    padding: 1rem;
    margin-bottom: 200px;
  }
</style>
