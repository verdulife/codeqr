<script>
  import { TYPES } from "@/lib/constants";
  import { qrType } from "@/lib/stores";
  import TabButton from "./TabButton.svelte";

  const keys = [...Object.keys(TYPES)];
</script>

<nav class="flex gap-2">
  {#each keys as key}
    <TabButton type={$qrType} selector={TYPES[key]}>
      {TYPES[key]}
    </TabButton>
  {/each}
</nav>
