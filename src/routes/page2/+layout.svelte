<script lang="ts">
    //ForPage2底下的layout
    import type { LayoutData } from './$types';
    
    export let data: LayoutData;
</script>
<div><h1>This is Page 2 Layout</h1></div>
<div>LayoutData = {data.content}</div>
<slot></slot>