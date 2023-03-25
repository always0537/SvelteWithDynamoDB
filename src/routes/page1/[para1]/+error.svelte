<script lang="ts">
    //page.ts/ page.Server.ts error時回傳頁面
    import { page } from '$app/stores';
    import type { Server } from '@sveltejs/kit';
</script>

<h1>{$page.status}: {$page.error?.message}</h1>