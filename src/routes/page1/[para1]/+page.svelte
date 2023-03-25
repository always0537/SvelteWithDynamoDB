<script lang="ts">
  //PageData資料取得 當同時使用PageServerData及PageData時，PageServerData需透過PageData轉出，無法直接在這使用PageServerData
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<h2>LoadData{data.content}</h2>
<!-- <h2>LoadData{data}</h2> -->
<h2>LoadServerData{data.servercontent}</h2>
