<script lang="ts">
  //PageServerData資料取得
  import type {PageServerData} from "./$types";
  export let data : PageServerData;

</script>
<h2>this is Page1</h2>
<div>ServerData = {data.data}</div>
<a href="/">go back</a>