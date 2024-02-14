<script lang="ts">
  import gyms from "$lib/gyms.json";
</script>

<div class="box">
  <h1>Choose song machine</h1>

  {#each gyms as item}
    <h2><a href="/{item.slug}"> {item.name} - {item.description}</a></h2>
  {/each}

</div>


<style>

</style>
