<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
  console.log("current gym",data)
</script>


<div class="box">
  <h1>{data.name}</h1>

  <h1>Sprinkle happiness</h1>
  <h2>Submitting a Song</h2>

  Song name or URL: <input value="" />

  <input type="submit" value="Submit" />

  <a href="/list">List of all songs</a>
</div>


<style>

</style>
